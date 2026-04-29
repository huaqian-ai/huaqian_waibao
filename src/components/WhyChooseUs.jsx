import React from 'react'

const reasons = [
  {
    icon: 'icon-hezuomoshi',
    title: '灵活的合作模式',
    desc: 'SaaS快速上线，满足敏捷需求；支持深度定制开发，贴合企业独特业务逻辑'
  },
  {
    icon: 'icon-yewu',
    title: '全场景业务赋能',
    desc: '用AI智能体替代客服、销售、HR、财务、办公等全场景的重复工作，降本增效'
  },
  {
    icon: 'icon-anquankekong',
    title: '安全可控的部署',
    desc: '支持私有化部署，无缝接入企微、飞书、钉钉等办公软件，企业数据安全自主可控'
  },
  {
    icon: 'icon-fuwu',
    title: '专业可靠的服务',
    desc: '坚持"先出方案再报价"原则，项目周期透明，严格把控交付质量，让您无后顾之忧'
  }
]

function WhyChooseUs() {
  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title">为什么选择我们？</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <div key={index} className="card text-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="mb-4"><i className={`iconfont ${item.icon}`} style={{ fontSize: '42px', color: '#f97316' }}></i></div>
              <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs