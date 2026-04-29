import React from 'react'

const plans = [
  {
    name: '轻量定制',
    subtitle: 'Single Scenario',
    price: '¥5-15万',
    periodLabel: '交付周期：2-4周',
    features: [
      '单场景智能体（RAG知识库/对话/简单工作流）',
      '云端快速部署',
      '配套标准管理后台',
      '1年标准售后支持'
    ],
    tier: 'starter'
  },
  {
    name: '标准定制',
    subtitle: 'Complex Business Process',
    price: '¥16-40万',
    periodLabel: '交付周期：1.5-3个月',
    features: [
      '多场景AI / 多Agent协作',
      '复杂工作流编排',
      '2-3个系统对接',
      '专属UI/UX定制',
      '私有化部署可选',
      '全员使用培训'
    ],
    tier: 'popular'
  },
  {
    name: '企业级深度定制',
    subtitle: 'Enterprise Full-stack System',
    price: '¥45-120万+',
    periodLabel: '交付周期：3-6个月',
    features: [
      '全栈AI系统构建',
      '完全私有化部署',
      '专属模型微调',
      '多系统深度打通',
      '高可用集群部署',
      '等保安全合规适配'
    ],
    tier: 'premium'
  }
]

const openForm = () => window.dispatchEvent(new Event('open-consult-form'))

function CustomPricing() {
  return (
    <section id="custom" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-label">04 定制开发方案</span>
          <h2 className="section-title">专属定制，深度赋能</h2>
          <p className="section-subtitle">
            项目制 · 专属功能 · 私有化部署
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">

          {/* Starter - Entry guide */}
          <div
            className="pricing-card card border border-gray-100 relative"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            {/* Dashed left border accent */}
            <div className="absolute left-0 top-6 bottom-6 w-0 border-l-2 border-dashed border-orange-300"></div>

            <div className="mb-4 pl-3">
              <h3 className="text-xl font-bold text-slate-800 mb-1">{plans[0].name}</h3>
              <p className="text-slate-400 text-sm font-medium">{plans[0].subtitle}</p>
            </div>

            <div className="mb-2 pl-3">
              <span className="pricing-price text-2xl">{plans[0].price}</span>
            </div>

            <div className="mb-6 pl-3">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-full">{plans[0].periodLabel}</span>
            </div>

            <ul className="pricing-features">
              {plans[0].features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>

            <button className="w-full btn btn-secondary" onClick={openForm}>获取方案</button>

            <p className="text-center text-gray-400 text-xs mt-4">快速验证AI场景可行性</p>
          </div>

          {/* Popular - Dark recommended */}
          <div
            className="pricing-card card pricing-card-dark relative shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Top glow bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400"></div>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Ribbon */}
            <div className="pricing-ribbon"><span>热门选择</span></div>

            <div className="mb-4 pt-2">
              <h3 className="text-xl font-bold text-white mb-1">{plans[1].name}</h3>
              <p className="text-white/40 text-sm font-medium">{plans[1].subtitle}</p>
            </div>

            <div className="mb-2">
              <span className="pricing-price text-2xl">{plans[1].price}</span>
            </div>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full">{plans[1].periodLabel}</span>
            </div>

            <ul className="pricing-features">
              {plans[1].features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>

            <button className="w-full btn btn-primary shadow-lg shadow-orange-500/20" onClick={openForm}>获取方案</button>

            <p className="text-center text-white/30 text-xs mt-4">最具性价比的企业级方案</p>
          </div>

          {/* Premium - Flagship */}
          <div
            className="pricing-card pricing-card-accent card border border-gray-100 relative"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-t-xl"></div>

            <div className="mb-4 pt-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-slate-800">{plans[2].name}</h3>
                <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-bold rounded-full">旗舰</span>
              </div>
              <p className="text-slate-400 text-sm font-medium">{plans[2].subtitle}</p>
            </div>

            <div className="mb-2">
              <span className="pricing-price text-2xl">{plans[2].price}</span>
            </div>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-medium rounded-full">{plans[2].periodLabel}</span>
            </div>

            <ul className="pricing-features">
              {plans[2].features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>

            <button className="w-full btn btn-accent" onClick={openForm}>获取方案</button>

            <p className="text-center text-gray-400 text-xs mt-4">行业头部企业之选</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CustomPricing
