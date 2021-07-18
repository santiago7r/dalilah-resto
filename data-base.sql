
create database delilah;

use delilah;

create table usuarios(
	id_usuarios int primary key not null auto_increment,
	nombre_de_usuario varchar(256),
	nombre varchar(256),
	apellido varchar(256),
	e_mail varchar(256),
	celular varchar(256),
	direccion varchar(256),
	contrasenia varchar(256),
	estado bool,
	id_roles int
);
 
create table ordenes(
	id_ordenes int primary key not null auto_increment,
	estado_de_orden varchar(256),
	id_usuarios int
);

create table orden_producto_bridge(
	id_orden_producto int primary key auto_increment,
	estado_de_orden varchar(256),
	id_ordenes int,
	id_productos int
);

create table productos(
	id_productos int primary key auto_increment,
	producto varchar(256),
	precio float,
	index(id_productos),
	foreign key(id_productos) references ordenes(id_productos)
);

create table roles(
	id_roles int primary key auto_increment,
	rol_de_usuario varchar(256)
);


create table pagos(
	id_pagos int primary key auto_increment,
	tipo_de_pago varchar(256)
);

