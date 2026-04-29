import React from 'react'

const capabilities = [
  {
    icon: 'icon-duihua',
    title: 'AI对话与RAG知识库',
    desc: '构建企业专属的智能问答专家，快速准确地回答员工与客户的问题'
  },
  {
    icon: 'icon-gongzuoliugongzuoliuguanli',
    title: '工作流自动化',
    desc: '串联任务，打破孤岛，实现跨系统业务流程自动执行，减少人工干预'
  },
  {
    icon: 'icon--rengongzhineng',
    title: '多Agent协同',
    desc: '多个AI智能体分工协作，模拟团队配合，共同完成复杂的综合性任务'
  },
  {
    icon: 'icon-lianjie',
    title: '系统集成与部署',
    desc: '无缝对接CRM、ERP、OA等系统；支持私有化部署，全方位保障数据安全与合规'
  }
]

function Capabilities() {
  return (
    <section id="capabilities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-semibold">01</span>
          <h2 className="section-title">方案定位与核心能力</h2>
          <p className="section-subtitle">
            为企业量身打造的AI智能体解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
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

export default Capabilities