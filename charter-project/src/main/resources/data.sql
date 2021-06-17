DROP TABLE IF EXISTS customer;

CREATE TABLE customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(250) NOT NULL,
    last_name VARCHAR(250) NOT NULL
);

INSERT INTO CUSTOMER (first_name, last_name) VALUES
    ('Fanni', 'Sunden'),
    ('Juliane', 'Ingesson'),
    ('Eleanora', 'Grieve'),
    ('Nasira', 'Beckham'),
    ('Carola', 'Emerson'),
    ('Eufemia', 'Sackville'),
    ('Kaylin', 'Jerome'),
    ('Twyla', 'Simon'),
    ('Niko', 'Strong'),
    ('Stacee', 'Rogerson'),
    ('Isra', 'Geisler'),
    ('Esta', 'Dittmar'),
    ('Bryanne', 'Coghlan'),
    ('Otto', 'Steiner'),
    ('Chad', 'Schultze'),
    ('Ken', 'Gibbs'),
    ('Anne', 'Lombardi'),
    ('Toal', 'Daugherty'),
    ('Talako', 'Alscher'),
    ('Amina', 'Kemp'),
    ('Aniela', 'Hasegawa'),
    ('Samad', 'Episcopo'),
    ('Paula', 'Bennett'),
    ('Lilianna', 'MacCailin'),
    ('Quinlan', 'Braoin');