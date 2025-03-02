interface CoursePageProps {
  params: {
    'course-name': string;
  };
}

export default async function FunctionName({ params }: CoursePageProps) {
  const { 'course-name': courseName } = params; 
  return <h1>Course Name: {courseName}</h1>;
}
