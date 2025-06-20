# Write your MySQL query statement below
select email as Email from person where email is not null GROUP BY email HAVING count(email) > 1;