import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory{

    constructor(private configService: ConfigService){}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: "mysql",
            host: this.configService.get('DATABASE_HOST'),
            port: this.configService.get('DATABASE_PORT'),
            username: this.configService.get('DATABASE_USERNAME'),
            password: this.configService.get('DATABASE_PWD'),
            database: this.configService.get('DATABASE'),
            entities: [
                "dist/**/*.entity{.ts,.js}"
            ],
            // synchronize: true,
            logging: false,
            autoLoadEntities: true,
            maxQueryExecutionTime: 1000
        }
    }


}