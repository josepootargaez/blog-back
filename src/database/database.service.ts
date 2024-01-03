// src/database/database.service.ts

import { Injectable, OnModuleInit } from '@nestjs/common';
import * as sql from 'mssql';
require("dotenv").config();

@Injectable()
export class DatabaseService  {
  private pool: sql.ConnectionPool;

  private async connect() {
    const config: sql.config = {
      user: process?.env?.SQL_SERVER_USER ? process.env.SQL_SERVER_USER : 'sa',
      password:  process?.env?.SQL_SERVER_PASSWORD ? process.env.SQL_SERVER_PASSWORD :'MiContrasena2022!',
      server: process?.env?.SQL_SERVER_HOST ? process.env.SQL_SERVER_HOST :'sql-server-db',
      database: process?.env?.SQL_SERVER_DATABASE ? process.env.SQL_SERVER_DATABASE :'blog',
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
      
    };

    try {
      this.pool = await new sql.ConnectionPool(config).connect();
      console.log('Conexión exitosa a la base de datos');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error.message);
    }
  }

  async query(queryString: string, params?: any) {
    try {
        await this.connect();
      const request = this.pool.request();
      if (params) {
        params.forEach(param => {
          request.input(param.name, param.value);
        });
      }
      const result = await request.query(queryString);
      return  result;
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error.message);
      throw error;
    }
  }
}