import React from 'react'

const addOns = [
  { name: '私有知识库 RAG', price: '1-5万', note: '按文档量/清洗难度', icon: 'icon-duihua', tag: '热门' },
  { name: '工作流自动化', price: '1-3万/个', note: '单流程', icon: 'icon-gongzuoliugongzuoliuguanli', tag: '推荐' },
  { name: '第三方系统对接', price: '2-8万/个', note: 'CRM/ERP/OA等', icon: 'icon-lianjie', tag: '' },
  { name: '语音/多模态', price: '3-10万', note: '文本+语音+图像', icon: 'icon--rengongzhineng', tag: '' },
  { name: '私有化部署', price: '+30-50%', note: '基于开发费', icon: 'icon-anquankekong', tag: '安全' },
  { name: '模型微调/行业专属', price: '10-30万+', note: '深度定制', icon: 'icon-kuaisushengjix', tag: '' },
  { name: '年度运维/升级', price: '15-20%/年', note: '基于开发费', icon: 'icon-fuwu', tag: '长期' }
]

const steps = [
  { label: '需求调研', icon: 'icon-duihua', desc: '深入了解业务痛点' },
  { label: '方案确认', icon: 'icon-jiejuefangan', desc: '定制专属解决方案' },
  { label: '原型设计', icon: 'icon-hezuomoshi', desc: '可视化产品原型' },
  { label: '开发测试', icon: 'icon-gongzuoliugongzuoliuguanli', desc: '敏捷迭代高质交付' },
  { label: '上线部署', icon: 'icon-kuaisubushu', desc: '一键部署快速上线' },
  { label: '培训交付', icon: 'icon-fuwu', desc: '全面培训无忧交接' }
]

function DeliveryStandards() {
  return (
    <section id="delivery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-semibold">05</span>
          <h2 className="section-title">交付标准与合作模式</h2>
          <p className="section-subtitle">
            灵活增项与标准交付流程，给客户的安全感与专业保障
          </p>
        </div>

        {/* Add-on pricing */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-10">
            <h3 className="text-xl font-bold text-secondary">常用功能模块加价</h3>
            <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">按需灵活组合</span>
          </div>

          {/* Top row: 4 items */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {addOns.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-5 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 cursor-default"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                {item.tag && (
                  <span className="absolute -top-2.5 right-4 text-xs bg-orange-500 text-white px-2.5 py-0.5 rounded-full font-medium">{item.tag}</span>
                )}
                <div className="w-11 h-11 rounded-lg bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-3 transition-colors">
                  <i className={`iconfont ${item.icon}`} style={{ fontSize: '22px', color: '#f97316' }}></i>
                </div>
                <div className="font-semibold text-secondary text-sm mb-2">{item.name}</div>
                <div className="text-primary font-bold text-lg">{item.price}</div>
                {item.note && <div className="text-gray-400 text-xs mt-1">{item.note}</div>}
              </div>
            ))}
          </div>

          {/* Bottom row: 3 items, centered */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addOns.slice(4).map((item, index) => (
              <div
                key={index + 4}
                className="group relative bg-white rounded-xl p-5 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 cursor-default"
                data-aos="fade-up"
                data-aos-delay={(index + 4) * 60}
              >
                {item.tag && (
                  <span className="absolute -top-2.5 right-4 text-xs bg-orange-500 text-white px-2.5 py-0.5 rounded-full font-medium">{item.tag}</span>
                )}
                <div className="w-11 h-11 rounded-lg bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-3 transition-colors">
                  <i className={`iconfont ${item.icon}`} style={{ fontSize: '22px', color: '#f97316' }}></i>
                </div>
                <div className="font-semibold text-secondary text-sm mb-2">{item.name}</div>
                <div className="text-primary font-bold text-lg">{item.price}</div>
                {item.note && <div className="text-gray-400 text-xs mt-1">{item.note}</div>}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">* 以上价格为参考区间，实际报价以需求评估为准</p>
        </div>

        {/* Delivery flow - closed loop */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12" data-aos="fade-up">
          <h3 className="text-xl font-bold text-center text-secondary mb-10">标准交付流程</h3>

          {/* Desktop: circular layout */}
          <div className="hidden md:block relative mx-auto" style={{ maxWidth: '700px', height: '420px' }}>
            {/* Center logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center shadow-lg z-10">
              <span className="text-white text-sm font-bold text-center leading-tight">闭环<br/>交付</span>
            </div>

            {/* Circular connecting ring */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-dashed border-orange-200"></div>

            {/* Steps positioned in circle */}
            {steps.map((step, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180)
              const radius = 175
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center text-center"
                  style={{
                    left: `calc(50% + ${x}px - 60px)`,
                    top: `calc(50% + ${y}px - 45px)`,
                    width: '120px'
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center mb-2 border-2 border-orange-100 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
                    <i className={`iconfont ${step.icon}`} style={{ fontSize: '24px', color: '#f97316' }}></i>
                  </div>
                  <div className="text-sm font-bold text-secondary">{step.label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{step.desc}</div>
                </div>
              )
            })}

            {/* Directional arrows on the ring */}
            {steps.map((_, index) => {
              const midAngle = ((index * 60 + 30) - 90) * (Math.PI / 180)
              const arrowR = 145
              const ax = Math.cos(midAngle) * arrowR
              const ay = Math.sin(midAngle) * arrowR
              const rotation = index * 60 + 30
              return (
                <div
                  key={`arrow-${index}`}
                  className="absolute text-orange-300"
                  style={{
                    left: `calc(50% + ${ax}px - 8px)`,
                    top: `calc(50% + ${ay}px - 8px)`,
                    transform: `rotate(${rotation}deg)`
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0l8 8-8 8V0z" />
                  </svg>
                </div>
              )
            })}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-orange-200"></div>
            {steps.map((step, index) => (
              <div key={index} className="relative mb-8 last:mb-0" data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="absolute -left-8 top-1 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold shadow-md z-10">
                  {index + 1}
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm ml-4 border border-orange-50 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-1">
                    <i className={`iconfont ${step.icon}`} style={{ fontSize: '20px', color: '#f97316' }}></i>
                    <span className="font-bold text-secondary">{step.label}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-sm">
            全链路透明化管理，确保项目按时按质交付 · <span className="text-primary font-semibold">持续优化，形成闭环</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default DeliveryStandards