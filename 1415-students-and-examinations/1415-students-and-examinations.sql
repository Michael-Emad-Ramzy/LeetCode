# Write your MySQL query statement below
WITH StudentSubjects AS (
    -- Generate all combinations of students and subjects
    SELECT 
        s.student_id,
        s.student_name,
        sub.subject_name
    FROM 
        Students s
    CROSS JOIN 
        Subjects sub
),
ExamCounts AS (
    -- Count the number of exams attended by each student for each subject
    SELECT 
        e.student_id,
        e.subject_name,
        COUNT(*) AS attended_exams
    FROM 
        Examinations e
    GROUP BY 
        e.student_id, e.subject_name
)
-- Combine the two and include missing combinations with 0 count
SELECT 
    ss.student_id,
    ss.student_name,
    ss.subject_name,
    COALESCE(ec.attended_exams, 0) AS attended_exams
FROM 
    StudentSubjects ss
LEFT JOIN 
    ExamCounts ec
ON 
    ss.student_id = ec.student_id AND ss.subject_name = ec.subject_name
ORDER BY 
    ss.student_id, ss.subject_name;
