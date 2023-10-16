create database rocket;
use rocket;

create table foguete(
 id int auto_increment not null,
 nomefoguete varchar(50) null,
 tipo varchar(50) null,
 ano int null,
 primary key(id)
);

select * from foguete;