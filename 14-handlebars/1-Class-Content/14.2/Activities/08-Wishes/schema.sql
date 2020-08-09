
create database wishes_db;

use wishes_db;

create table wishes
(
    id int not null auto_increment,
    wish varchar(255)
)

insert into wishes ("I wish I had a million dollars... Hot dog!"), ("I wish I could fly"), ("I wish I were a video game programmer")