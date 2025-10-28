const Blog = () => {
  // User requested 'use hasnode and medium' — interpret as linking to HasNode (or similar) and Medium posts.
  const posts = [
    { id: 'p1', title: 'Designing for Performance', href: '#', source: 'Medium' },
    { id: 'p2', title: 'Small React patterns', href: '#', source: 'HasNode' },
  ];

  return (
    <section id="blog" className="py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-merienda text-[#8eb69b] mb-6">Writing</h2>
        <p className="text-[#daf1de] mb-4">Short picks from my writing on Medium and HasNode.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <a key={post.id} href={post.href} className="block p-4 bg-[#0b2b26] rounded-lg hover:translate-y-1 transform transition-transform">
              <h4 className="text-[#daf1de] font-semibold">{post.title}</h4>
              <div className="text-sm text-[#8eb69b]">{post.source}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
