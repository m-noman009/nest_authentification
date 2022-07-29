import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsEmail, Length, IsEnum } from "class-validator"

export enum ROLES {
	"ADMIN" = "ADMIN",
	"CONTROLLER" = "CONTROLLER",
	"ACCOUNTANT" = "ACCOUNTANT",
}

export class SignupDto {
	@ApiProperty({ default: "" })
	@IsString()
	@IsNotEmpty()
	firstName: string

	@ApiProperty({ default: "" })
	@IsString()
	@IsNotEmpty()
	lastName: string

	@ApiProperty({ default: "" })
	@IsEmail()
	email: string

	@ApiProperty({ default: "" })
	@IsString()
	@Length(6, 20)
	password: string

	@ApiProperty({ default: ROLES.CONTROLLER })
	@IsEnum(ROLES)
	role: ROLES
}
