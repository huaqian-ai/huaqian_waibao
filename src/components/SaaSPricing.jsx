import React from 'react'

const plans = [
  {
    name: '基础版 SaaS',
    subtitle: '小微企业 / 单一场景',
    price: '¥2-5万',
    period: '/年',
    users: '≤50个用户',
    timeline: '3-7个工作日上线',
    features: [
      'RAG知识库(≤500页)',
      '基础对话功能',
      '标准后台管理',
      '基础权限设置与日志审计',
      '日常API调用额度'
    ],
    tier: 'starter'
  },
  {
    name: '标准版 SaaS',
    subtitle: '中小企业 / 多场景协同',
    price: '¥6-12万',
    period: '/年',
    users: '≤200个用户',
    timeline: '7-15个工作日上线',
    features: [
      'RAG知识库(不限量)',
      '多轮记忆 & 智能工作流',
      '复杂文件解析 & 数据看板',
      '高级权限管理',
      '优先技术支持'
    ],
    tier: 'popular'
  },
  {
    name: '高级版 SaaS',
    subtitle: '中大型企业 / 深度赋能',
    price: '¥13-25万',
    period: '/年',
    users: '≤500个用户',
    timeline: '15-30个工作日上线',
    features: [
      '企业级高级工作流引擎',
      '第三方系统无缝对接',
      '多Agent智能协同',
      '完全自定义BI报表',
      '私有化部署支持'
    ],
    tier: 'premium'
  }
]

const openForm = () => window.dispatchEvent(new Event('open-consult-form'))

function SaaSPricing() {
  return (
    <section id="saas" className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="section-label">03 SaaS订阅方案</span>
          <h2 className="section-title">灵活选择，按需订阅</h2>
          <p className="section-subtitle">
            轻量化 · 快速上线 · 按年付费
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">

          {/* Starter - Clean & Light */}
          <div
            className="pricing-card card border border-gray-100"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <h3 className="text-xl font-bold text-slate-800">{plans[0].name}</h3>
              </div>
              <p className="text-slate-500 text-sm">{plans[0].subtitle}</p>
            </div>

            <div className="mb-4">
              <span className="pricing-price">{plans[0].price}</span>
              <span className="text-slate-500 text-sm">{plans[0].period}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-100 text-slate-500 text-xs font-medium rounded-full">{plans[0].users}</span>
              <span className="px-3 py-1 bg-gray-100 text-slate-500 text-xs font-medium rounded-full">{plans[0].timeline}</span>
            </div>

            <ul className="pricing-features">
              {plans[0].features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>

            <button className="w-full btn btn-secondary" onClick={openForm}>立即咨询</button>

            <p className="text-center text-gray-400 text-xs mt-4">适合初次体验AI的小微企业</p>
          </div>

          {/* Popular - Dark & Highlighted */}
          <div
            className="pricing-card card pricing-card-dark relative shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Top glow bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400"></div>
            {/* Subtle glow effect */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Ribbon */}
            <div className="pricing-ribbon"><span>推荐方案</span></div>

            <div className="mb-6 pt-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                <h3 className="text-xl font-bold text-white">{plans[1].name}</h3>
              </div>
              <p className="text-white/50 text-sm">{plans[1].subtitle}</p>
            </div>

            <div className="mb-4">
              <span className="pricing-price">{plans[1].price}</span>
              <span className="text-white/40 text-sm">{plans[1].period}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full">{plans[1].users}</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-medium rounded-full">{plans[1].timeline}</span>
            </div>

            <ul className="pricing-features">
              {plans[1].features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>

            <button className="w-full btn btn-primary shadow-lg shadow-orange-500/20" onClick={openForm}>立即咨询</button>

            <p className="text-center text-white/30 text-xs mt-4">80% 客户的选择</p>
          </div>

          {/* Premium - Tech & Accent */}
          <div
            className="pricing-card pricing-card-accent card border border-gray-100 relative"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>

            <div className="mb-6 pl-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <h3 className="text-xl font-bold text-slate-800">{plans[2].name}</h3>
              </div>
              <p className="text-slate-500 text-sm">{plans[2].subtitle}</p>
            </div>

            <div className="mb-4 pl-3">
              <span className="pricing-price">{plans[2].price}</span>
              <span className="text-slate-500 text-sm">{plans[2].period}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 pl-3">
              <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-medium rounded-full">{plans[2].users}</span>
              <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-medium rounded-full">{plans[2].timeline}</span>
            </div>

            <ul className="pricing-features">
              {plans[2].features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>

            <button className="w-full btn btn-outline-accent" onClick={openForm}>立即咨询</button>

            <p className="text-center text-gray-400 text-xs mt-4">大型企业首选</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SaaSPricing
