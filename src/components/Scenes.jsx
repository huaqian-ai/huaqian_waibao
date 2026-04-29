import React from 'react'

const scenes = [
  {
    category: '前端服务与增长',
    icon: 'icon-zengchang',
    items: [
      { name: '智能客服 / 售后助手', desc: '7×24小时自动应答，提升客户满意度，解放人力' },
      { name: '销售SOP助手 / 商机挖掘', desc: '辅助销售执行标准流程，智能分析线索，提升转化率' }
    ]
  },
  {
    category: '中端管理与风控',
    icon: 'icon-anquankekong',
    items: [
      { name: 'HR招聘 / 入职 / 培训问答', desc: '自动筛选简历，解答入职疑问，提供培训支持' },
      { name: '财务报销 / 合同审核', desc: '自动审核报销合规性，辅助合同条款审查，降低风险' }
    ]
  },
  {
    category: '后端生产与办公',
    icon: 'icon-shandian',
    items: [
      { name: '生产 / 供应链 / 设备预警', desc: '预测设备故障，优化供应链，保障生产稳定' },
      { name: '办公自动化', desc: '自动生成会议总结、周报、合同初稿等，提升办公效率' }
    ]
  }
]

function Scenes() {
  return (
    <section id="scenes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-semibold">02</span>
          <h2 className="section-title">行业场景AI功能</h2>
          <p className="section-subtitle">
            将AI能力深度融合到企业核心业务场景，实现真正的业务赋能
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {scenes.map((scene, index) => (
            <div key={index} className="card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="flex items-center mb-4">
                <i className={`iconfont ${scene.icon} mr-3`} style={{ fontSize: '28px', color: '#f97316' }}></i>
                <h3 className="text-lg font-bold text-secondary">{scene.category}</h3>
              </div>
              <div className="space-y-4">
                {scene.items.map((item, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-secondary mb-1">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Scenes