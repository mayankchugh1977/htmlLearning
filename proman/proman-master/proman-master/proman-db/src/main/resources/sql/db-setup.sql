
CREATE SCHEMA IF NOT EXISTS proman;
COMMIT;

-- Copyright 2018-2019, https://beingtechie.io

-- Script: db-setup.sql
-- Description: Setup database and users
-- Version: 1.0
-- Author: Thribhuvan Krishnamurthy

-- # Step 1 - Drop the existing database and users
-- REASSIGN OWNED BY proman_dba TO postgres;
-- DROP OWNED BY proman_dba;
-- DROP OWNED BY proman_dev;

-- # Step 2 - Create users
-- CREATE USER proman_dba WITH ENCRYPTED PASSWORD 'promandba@123';
-- CREATE USER proman_dev WITH ENCRYPTED PASSWORD 'promandev@123';

-- # Step 3 - Create database
-- CREATE SCHEMA proman AUTHORIZATION proman_dba;
-- GRANT ALL PRIVILEGES ON SCHEMA proman TO proman_dba;

-- COMMIT;
-- ******************* End of Setup