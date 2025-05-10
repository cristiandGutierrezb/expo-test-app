CREATE TABLE tasks (
  id_task INT PRIMARY KEY auto_increment,
  description VARCHAR(255) NOT NULL,
  state_id int,
  foreign key (state_id) references states(id_state)
);

INSERT INTO tasks (description, state_id) VALUES
  ('Doctor Appointment', 1),
  ('Meeting at School', 2),
  ('Buy groceries', 2),
  ('Finish homework', 1),
  ('Call mom', 2);