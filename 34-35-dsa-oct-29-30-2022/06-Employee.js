class Employee {
    constructor( name, role, dept ) {
        this.name = name;
        this.role = role;
        this.dept = dept;
    }

    toString() {
        return `${this.name}, ${this.role} - ${this.dept}`;
    }
}

export default Employee;