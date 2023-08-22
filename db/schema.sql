DROP DATABASE IF EXISTS forum_db;
CREATE DATABASE forum_db;

USE forum_db;

-- thread <--->>> comments

CREATE TABLE threads (

    id INT(8) NOT NULL AUTO_INCREMENT,
    body VARCHAR(1000),
    likeCount INT(8),
    PRIMARY KEY (id)

);


CREATE TABLE comments (

    id INT(8) NOT NULL AUTO_INCREMENT,
    body VARCHAR(1000),
    threads_id INT(8),
    PRIMARY KEY (id),
    FOREIGN KEY threads_id REFERENCES threads (id)

);
