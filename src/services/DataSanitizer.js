class DataSanitizer {

    static cleanInstructors(rawInstructors) {
        return rawInstructors.rows;
    }

    static cleanStudents(rawStudents) {
        return rawStudents.rows;
    }

}

export default DataSanitizer;