DROP DATABASE IF EXISTS top_songsDB;

CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(100) NULL,
  title varchar(100) null,
  year int not null,
  global float(10, 3) not null,
  usa float(10, 3) not null,
  uk float(10, 3) not null,
  eu float(10,3) not null,
  restOfWorld float(10,3) not null,
  PRIMARY KEY (id)
);

select * from songs;