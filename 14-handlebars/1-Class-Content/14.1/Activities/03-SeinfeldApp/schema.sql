create database seinfeld_db;

use seinfeld_db;

create table actors
(
    id int auto_increment,
    name varchar(40),
    coolness_points int not null,
    attitude varchar(40),
    primary key (id)
);

insert into actors (name, coolness_points, attitude)
values ("Leonardo DeCaprio", 90, "suave"), ("Tom Hanks", 85, "jovial"), ("Actor 3", 22, "bitter"), ("Actor 4", 100, "friendly");