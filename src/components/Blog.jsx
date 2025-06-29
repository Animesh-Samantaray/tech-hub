import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "🧠 Why We’re Doing This",
    content:
      "Learning to code can feel like rocket science 🚀 — but it doesn't have to be. We're here to help absolute beginners get started with Java and Python. For free. No ads. No BS.",
  },
  {
    title: "💻 What You'll Learn",
    content:
      "In Java: Variables, Loops, OOP, Projects. In Python: Syntax, Functions, Lists, Projects. Everything beginner-friendly with hands-on examples.",
  },
  {
    title: "🌱 Who’s This For?",
    content:
      "Students, non-CS folks, career switchers — anyone curious about coding. We explain things clearly and practically.",
  },
  {
    title: "🤝 Why Trust Us?",
    content:
      "Built by learners, for learners. We keep it simple, helpful, and human — not robotic. No more tutorials that leave you hanging.",
  },
  {
    title: "🔥 What’s Coming Next?",
    content:
      "More content, practice problems, quizzes, career prep — and maybe even internships. Stay tuned!",
  },
];

const BlogSection = () => {
  return (
    <section className="px-4 py-12 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Blog ✍️
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-300">{post.title}</h3>
              <p className="text-gray-300">{post.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;