create database projecte;
create database pokeapi;

CREATE TABLE pokemon (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    altura FLOAT NOT NULL,
    pes float NOT NULL
);

CREATE TABLE tipus (
    id INT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL
);

CREATE TABLE pokemon_tipus (
    pokemon_id INT,
    tipus_id INT,
    PRIMARY KEY (pokemon_id, tipus_id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
    FOREIGN KEY (tipus_id) REFERENCES tipus(id)
);

CREATE TABLE abilitat (
    id INT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL
);

CREATE TABLE pokemon_abilitat (
    pokemon_id INT,
    abilitat_id INT,
    PRIMARY KEY (pokemon_id, abilitat_id),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
    FOREIGN KEY (abilitat_id) REFERENCES abilitat(id)
);

CREATE TABLE pokemon_especies (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    evolucio_especies INT,
    FOREIGN KEY (evolucio_especies) REFERENCES pokemon_especies(id)
);


