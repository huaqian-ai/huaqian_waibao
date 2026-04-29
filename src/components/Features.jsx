import React from 'react'

const features = [
  {
    category: '核心AI能力',
    icon: '⚙️',
    items: [
      { name: '企业私有知识库 RAG', desc: '支持文档、表格、PPT、PDF等多种格式，构建企业专属的知识大脑' },
      { name: '多轮对话与长期记忆', desc: '智能体具备上下文理解和长期记忆能力，提供更自然、更精准的对话体验' },
      { name: '工作流编排与API调用', desc: '可视化拖拽编排工作流，自动调用内部或外部API，实现任务自动化' },
      { name: '多模态解析', desc: '支持文本、图片、语音、文件的综合解析与理解，处理信息更全面' },
      { name: '后台管理', desc: '提供完善的权限管理、操作日志、数据看板和模型监控功能，管理一目了然' },
      { name: '安全合规', desc: '内置数据脱敏、操作审计、等保适配等功能，确保企业数据安全' }
    ]
  }
]

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-primary font-semibold">02</span>
          <h2 className="section-title">可交付AI功能清单</h2>
          <p className="section-subtitle">
            所有方案均包含以下强大的核心AI能力，确保您获得最先进的技术支持
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features[0].items.map((item, index) => (
            <div key={index} className="card border-l-4 border-primary" data-aos="fade-up" data-aos-delay={index * 50}>
              <h3 className="text-lg font-bold text-secondary mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features