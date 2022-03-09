-- Create users table
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    personalDocument varchar(14) NOT NULL,
    birthday DATE NOT NULL,
    password varchar(200),
    PRIMARY KEY (id),
    CONSTRAINT UC_users_email UNIQUE (email),
    CONSTRAINT UC_users_personalDocument UNIQUE (personalDocument)
);

-- Create movies table
CREATE TABLE categories (
    id int NOT NULL,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Create movies table
CREATE TABLE movies (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    price DECIMAL(15, 2) NOT NULL,
    quantity INT NOT NULL,
    categoryId INT NOT NULL,
    userId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (categoryId) REFERENCES categories(id),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE SET NULL
);

INSERT INTO categories (id, name) VALUES (1, 'Ação');
INSERT INTO categories (id, name) VALUES (2, 'Comédia');
INSERT INTO categories (id, name) VALUES (3, 'Aventura');
INSERT INTO categories (id, name) VALUES (4, 'Terror');
INSERT INTO categories (id, name) VALUES (5, 'Romance');