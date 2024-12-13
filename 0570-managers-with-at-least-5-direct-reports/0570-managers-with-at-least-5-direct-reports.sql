# Write your MySQL query statement below
SELECT emp.name
FROM Employee AS emp
LEFT JOIN Employee AS mang
ON emp.id = mang.managerId
GROUP BY emp.id
HAVING COUNT(mang.id) >= 5;
