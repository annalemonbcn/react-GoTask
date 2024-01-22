import { Task } from "../types";

const tasksData: Task[] = [
  {
    id: 1,
    title: "Homepage Redesign",
    description:
      "Redesign the homepage of our website to improve user engagement and align with our updated branding guidelines. Focus on creating an intuitive user interface with enhanced visual appeal.",
    createdOn: new Date(2023, 10, 15),
    deadline: new Date(2024, 0, 24),
    status: "New task",
  },
  {
    id: 2,
    title: "Mobile App Interface Optimization",
    description:
      "Optimize the user interface for our mobile app, ensuring a seamless and delightful user experience. Consider incorporating user feedback and modern design trends to enhance usability and aesthetics.",
    createdOn: new Date(2023, 10, 15),
    deadline: new Date(2024, 0, 24),
    status: "In progress",
  },
  {
    id: 3,
    title: "E-commerce Checkout Process Redesign",
    description:
      "Redesign the checkout process for our e-commerce platform, focusing on improving conversion rates and reducing abandoned carts. Optimize the UI to guide users smoothly through the purchasing journey.",
    createdOn: new Date(2023, 10, 15),
    deadline: new Date(2024, 0, 24),
    status: "Completed",
  },
  {
    id: 4,
    title: "New Feature Integration UI Design",
    description:
      "Redesign the homepage of our website to improve user engagement and align with our updated branding guidelines. Focus on creating an intuitive user interface with enhanced visual appeal.",
    createdOn: new Date(2023, 10, 15),
    deadline: new Date(2024, 0, 24),
    status: "New task",
  },
  {
    id: 5,
    title: "Task title 5",
    description: "Description for task 5.",
    createdOn: new Date(2023, 10, 15),
    deadline: new Date(2024, 0, 24),
    status: "In progress",
  },
];

export default tasksData;
