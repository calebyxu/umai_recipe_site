-- Tables
CREATE TABLE recipes (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    img VARCHAR(30),
    video VARCHAR(50),
    time INT,
    serving INT,
    description VARCHAR(30),
    ingredients TEXT,
    instructions TEXT,
    tags VARCHAR(20)
); 