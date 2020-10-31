interface Person {
    name: string;
    age?: number; // 선택적 프로퍼티
}

interface Student extends Person {
    grade: number;
}

const student: Student = {
    name: "Lee",
    grade: 3,
};
