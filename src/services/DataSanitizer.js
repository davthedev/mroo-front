class DataSanitizer {

    static cleanInstructors(rawInstructors) {
        return rawInstructors.rows;
    }

    static cleanStudents(rawStudents) {
        return rawStudents.rows;
    }

    static cleanJobs(rawJobs) {
        return rawJobs.rows;
    }

}

export default DataSanitizer;