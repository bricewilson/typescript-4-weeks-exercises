type Course = {
  teacher: string,
  grades: number[],
  average: () => number
};

let course: Course = {
  teacher: 'Ms. Smith',
  grades: [78,89,99,100],
  average() {
    let sum: number = 0;
    for (const grade of this.grades) {
      sum += grade;
    }
    return sum / this.grades.length;
  }
};

console.log(course.average());