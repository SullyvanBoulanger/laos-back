import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    @Field(type => String)
    id: string;

    @Column()
    @Field(type => String)
    username: string;

    @Column()
    @Field(type => String)
    email: string;

    @Column()
    @Field(type => String)
    password: string;
}