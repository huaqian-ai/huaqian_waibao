import React from 'react'

function About() {
  const values = [
    {
      icon: 'icon-tuanduixiaoshuaitisheng',
      title: '效率提升',
      desc: '用AI替代重复工作，释放员工创造力'
    },
    {
      icon: 'icon-chengbenyouhua',
      title: '成本优化',
      desc: '自动化流程显著降低运营成本'
    },
    {
      icon: 'icon-kuaisubushu',
      title: '快速部署',
      desc: 'SaaS模式3-7天即可上线使用'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title">关于我们</h2>
          <p className="section-subtitle">
            面向企业，用AI替代重复工作，提升效率，降本增效
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div key={index} className="card text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="mb-4"><i className={`iconfont ${item.icon}`} style={{ fontSize: '48px', color: '#f97316' }}></i></div>
              <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Company intro - light card */}
        <div className="mt-16 relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm" data-aos="fade-up">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-white"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.8) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}></div>
          {/* Decorative glows */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-100/60 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-100/40 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            {/* Quote icon */}
            <div className="flex justify-center mb-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"/>
                </svg>
              </div>
            </div>

            {/* Main text */}
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-delay="150">
              我们专注于为
              <span className="relative inline-block mx-1">
                <span className="relative z-10 font-bold text-secondary">中小企业及中大型企业</span>
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-orange-200/60 rounded"></span>
              </span>
              提供AI智能体标准化SaaS与企业级定制开发服务。
            </p>

            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto my-6" data-aos="scale-x" data-aos-delay="200"></div>

            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-delay="250">
              我们的使命是利用前沿的AI技术，将员工从繁琐、重复的工作中解放出来，聚焦于更高价值的创造性任务，最终实现企业运营效率的显著提升和成本的有效控制。
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6 mt-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-500">10+</div>
                <div className="text-gray-400 text-xs mt-1">年技术积累</div>
              </div>
              <div className="text-center border-x border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-orange-500">100%</div>
                <div className="text-gray-400 text-xs mt-1">项目交付率</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-500">7×24</div>
                <div className="text-gray-400 text-xs mt-1">全天候支持</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About