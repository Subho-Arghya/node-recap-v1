import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: Number

    @Column()
    firstName!: String

    @Column()
    lastName!: String

    @Column()
    isActive!: boolean
}

module.exports = User