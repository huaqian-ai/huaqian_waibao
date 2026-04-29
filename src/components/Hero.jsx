import React from 'react'

function Hero() {
  return (
    <section className="hero-section">
      {/* Background Effects */}
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center hero-content">
          {/* Badge */}
          <div className="hero-tag inline-block" data-aos="fade-up">
            <i className="iconfont icon-jiejuefangan"></i> 2026年度解决方案
          </div>
          
          {/* Main Title */}
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            华谦智能<span className="highlight">・</span>企业AI赋能专家
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            让AI成为你的全能员工 · 一键开启企业智能升级
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10" data-aos="fade-up" data-aos-delay="300">
            <button className="btn btn-primary text-lg px-10 py-4" onClick={() => window.dispatchEvent(new Event('open-consult-form'))}>
              立即咨询
            </button>
            <button className="btn btn-ghost text-lg px-10 py-4 group flex items-center gap-2" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              了解更多
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transformOrigin: 'left center' }} />
                <polyline points="14 6 20 12 14 18" />
              </svg>
            </button>
          </div>
          
          {/* Stats */}
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
            <div className="text-left">
              <div className="hero-stat-value">80+</div>
              <div className="hero-stat-label">企业客户信赖之选</div>
            </div>
            <div className="text-left">
              <div className="hero-stat-value">99.9%</div>
              <div className="hero-stat-label">服务稳定性保障</div>
            </div>
            <div className="text-left">
              <div className="hero-stat-value">7×24</div>
              <div className="hero-stat-label">全天候技术支持</div>
            </div>
            <div className="text-left">
              <div className="hero-stat-value">3-30</div>
              <div className="hero-stat-label">天极速上线周期</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero