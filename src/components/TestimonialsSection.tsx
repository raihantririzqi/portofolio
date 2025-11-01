import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager at TechCorp",
      content: "Yahya's ability to turn complex requirements into elegant solutions is impressive. He delivered our project ahead of schedule and exceeded our expectations.",
      rating: 5,
      avatar: "SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Developer at InnovateX",
      content: "Working with Yahya was a breeze. His clean code and attention to detail made our integration process seamless. Highly recommended!",
      rating: 5,
      avatar: "MC",
    },
    {
      id: 3,
      name: "Dr. Rina Kusuma",
      role: "Mentor & Senior Lecturer",
      content: "Yahya consistently demonstrates a deep understanding of both design and development principles. He's a quick learner and a natural problem solver.",
      rating: 5,
      avatar: "RK",
    },
    {
      id: 4,
      name: "Alex Rivera",
      role: "CEO of StartUp Labs",
      content: "The digital payment system Yahya built for our school was a game-changer. It's intuitive, robust, and has saved us countless hours.",
      rating: 5,
      avatar: "AR",
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
            <Quote className="h-4 w-4" />
            <span>What People Say</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from clients, colleagues, and mentors about my work and collaboration
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Quote Icon */}
              <div className="mb-6 text-violet-400">
                <Quote className="h-8 w-8" />
              </div>

              {/* Content */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}