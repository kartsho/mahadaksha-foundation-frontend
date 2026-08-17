import { useState, useEffect, useMemo } from "react";
import { Search, Clock, ArrowRight } from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * MOCK DATA LAYER
 * Swap `fetchBlogPosts` for a real API call later, e.g.:
 *   const res = await fetch(`${import.meta.env.VITE_API_URL}/blog/posts`);
 *   return res.json();
 * Keep the same shape below and nothing else in this file needs to change.
 * ---------------------------------------------------------------------------
 */
const MOCK_POSTS = [
  {
    id: "p1",
    title: "How Mahadaksha Structures a 12-Week Training Cohort",
    excerpt:
      "Behind the curriculum design that takes learners from fundamentals to placement-ready in three months.",
    category: "Training",
    readTime: "6 min read",
    tags: ["Curriculum", "Bootcamp", "Mentorship"],
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    author: { name: "Ananya Rao", role: "Program Director" },
    date: "2026-05-14",
    featured: true,
  },
  {
    id: "p2",
    title: "From Classroom to Codebase: A Placement Case Study",
    excerpt:
      "Tracking one cohort's journey from their first Git commit to their first production deploy.",
    category: "Case Study",
    readTime: "8 min read",
    tags: ["Placements", "Case Study"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    author: { name: "Vikram Sethi", role: "Placement Lead" },
    date: "2026-05-02",
    featured: true,
  },
  {
    id: "p3",
    title: "Teaching React Without Overwhelming First-Time Coders",
    excerpt:
      "The sequencing decisions that keep beginners moving forward instead of stuck on tooling.",
    category: "Engineering",
    readTime: "5 min read",
    tags: ["React", "Teaching", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    author: { name: "Priya Nair", role: "Frontend Instructor" },
    date: "2026-04-21",
  },
  {
    id: "p4",
    title: "Why We Run Mock Interviews Every Friday",
    excerpt:
      "A weekly ritual that turned interview anxiety into one of our strongest completion-rate levers.",
    category: "Product",
    readTime: "4 min read",
    tags: ["Interviews", "Career Prep"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
    author: { name: "Rohan Das", role: "Career Coach" },
    date: "2026-04-10",
  },
  {
    id: "p5",
    title: "Securing Student Data Across Our Learning Platform",
    excerpt:
      "The access-control and encryption choices behind a platform used by thousands of learners.",
    category: "Security",
    readTime: "7 min read",
    tags: ["Security", "Privacy"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    author: { name: "Sneha Iyer", role: "Security Engineer" },
    date: "2026-03-28",
  },
  {
    id: "p6",
    title: "Scaling Our Labs Infrastructure for Live Cohorts",
    excerpt:
      "How we moved from shared VMs to isolated, on-demand cloud labs without breaking the budget.",
    category: "Cloud",
    readTime: "6 min read",
    tags: ["Cloud", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    author: { name: "Karan Malhotra", role: "Platform Engineer" },
    date: "2026-03-15",
  },
];

function fetchBlogPosts() {
  // Simulated network latency so loading states are visible during dev.
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_POSTS), 500);
  });
}

const CATEGORIES = [
  "All",
  "Training",
  "Engineering",
  "Product",
  "Case Study",
  "Security",
  "Cloud",
];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7C4DF5]/15 text-xs font-semibold text-[#B79BFA] ring-1 ring-[#7C4DF5]/30">
      {initials}
    </div>
  );
}

function CategoryPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${
        active
          ? "border-[#7C4DF5] bg-[#7C4DF5] text-white"
          : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-[#7C4DF5]/40 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function PostCard({ post, featured = false }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#7C4DF5]/40 hover:bg-white/[0.04] ${
        featured ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "md:w-1/2" : "aspect-[16/10] w-full"
        }`}
      >
        <img
          src={post.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0817]/60 via-transparent to-transparent" />
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "md:p-8" : ""}`}>
        <div className="mb-3 flex items-center gap-3 text-xs">
          <span className="rounded-full bg-[#7C4DF5]/15 px-3 py-1 font-medium text-[#B79BFA]">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-gray-500">
            <Clock size={13} />
            {post.readTime}
          </span>
        </div>

        <h3
          className={`font-semibold text-white transition-colors duration-200 group-hover:text-[#B79BFA] ${
            featured ? "text-2xl leading-snug" : "text-lg leading-snug"
          }`}
        >
          {post.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {post.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 mt-6">
          <div className="flex items-center gap-3">
            <Avatar name={post.author.name} />
            <div>
              <p className="text-sm font-medium text-white">
                {post.author.name}
              </p>
              <p className="text-xs text-gray-500">{post.author.role}</p>
            </div>
          </div>
          <ArrowRight
            size={18}
            className="text-gray-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#B79BFA]"
          />
        </div>
      </div>
    </article>
  );
}

function PostCardSkeleton({ featured = false }) {
  return (
    <div
      className={`animate-pulse overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ${
        featured ? "md:flex md:flex-row" : ""
      }`}
    >
      <div
        className={`bg-white/5 ${
          featured ? "aspect-[16/10] md:w-1/2" : "aspect-[16/10] w-full"
        }`}
      />
      <div className="flex-1 space-y-3 p-6">
        <div className="h-3 w-24 rounded bg-white/5" />
        <div className="h-5 w-3/4 rounded bg-white/5" />
        <div className="h-4 w-full rounded bg-white/5" />
        <div className="h-4 w-2/3 rounded bg-white/5" />
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchBlogPosts().then((data) => {
      if (!cancelled) {
        setPosts(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const featuredPosts = useMemo(
    () => posts.filter((p) => p.featured),
    [posts]
  );

  const filteredPosts = useMemo(() => {
    return posts
      .filter((p) => !p.featured)
      .filter((p) =>
        activeCategory === "All" ? true : p.category === activeCategory
      )
      .filter((p) =>
        query.trim()
          ? p.title.toLowerCase().includes(query.trim().toLowerCase())
          : true
      );
  }, [posts, activeCategory, query]);

  return (
    <div className="relative min-h-screen bg-[#0d0817] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-40">
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#7C4DF5]/30 bg-[#7C4DF5]/10 px-4 py-1.5 text-sm text-[#B79BFA]">
            Mahadaksha Blog
          </span>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Notes from inside{" "}
            <span className="bg-gradient-to-r from-[#7C4DF5] to-[#B79BFA] bg-clip-text text-transparent">
              the classroom
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Stories from our instructors, mentors, and students — how we
            teach, what we've learned, and where our learners land next.
          </p>

          <div className="relative mx-auto mt-10 max-w-lg">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-[#7C4DF5]/50"
            />
          </div>
        </div>
      </section>

      {/* Featured */}
      {(loading || featuredPosts.length > 0) && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="mb-6 text-xl font-semibold text-white">Featured</h2>
          <div className="grid gap-6">
            {loading
              ? [0, 1].map((i) => <PostCardSkeleton key={i} featured />)
              : featuredPosts.map((post) => (
                  <PostCard key={post.id} post={post} featured />
                ))}
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <PostCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] py-20 text-center">
            <p className="text-gray-400">
              No articles match{" "}
              {query ? `"${query}"` : `the "${activeCategory}" category`}{" "}
              yet.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-sm font-medium text-[#B79BFA] hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

    </div>
  );
}