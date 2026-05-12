import { useState, useEffect } from 'react'

function CTA() {
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    const open = () => setShowContact(true)
    window.addEventListener('open-consult-form', open)
    return () => window.removeEventListener('open-consult-form', open)
  }, [])

  return (
    <section id="contact" className="cta-section py-24 relative">
      <div className="cta-bg"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-aos="fade-up">
            立即行动
          </h2>
          <p className="text-xl text-white/80 mb-8" data-aos="fade-up" data-aos-delay="100">
            开启您的AI转型之旅
          </p>
          
          <div className="cta-card p-10" data-aos="fade-up" data-aos-delay="200">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <div className="text-orange-400 font-semibold mb-2"><i className="iconfont icon-fuli mr-1"></i> 限时福利</div>
                <h3 className="text-2xl font-bold text-white mb-2">免费需求诊断</h3>
                <p className="text-white/60 text-sm">
                  专业顾问一对一分析您的业务场景，定制专属AI解决方案
                </p>
              </div>
              <div className="text-left">
                <div className="text-cyan-400 font-semibold mb-2"><i className="iconfont icon-kuaisushengjix mr-1"></i> 体验升级</div>
                <h3 className="text-2xl font-bold text-white mb-2">1次原型演示</h3>
                <p className="text-white/60 text-sm">
                  亲身体验AI智能体的强大能力，感受智能化办公新体验
                </p>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 mb-6">
                名额有限，立即联系我们预约专属服务
              </p>
              <button className="btn btn-primary text-lg px-12 py-4" onClick={() => setShowContact(true)}>
                立即预约咨询
              </button>
            </div>
          </div>
        </div>
      </div>

      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setShowContact(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div
            className="relative animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
              onClick={() => setShowContact(false)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-72 md:w-80 max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden bg-white">
              <img
                src="/lianxi.jpg"
                alt="扫码添加企业微信"
                className="w-full -mt-[8%] -mb-[8%]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CTA
