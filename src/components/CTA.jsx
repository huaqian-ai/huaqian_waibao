import React, { useState, useEffect } from 'react'

function CTA() {
  const [showForm, setShowForm] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', company: '', needs: '' })

  useEffect(() => {
    const openForm = () => setShowForm(true)
    window.addEventListener('open-consult-form', openForm)
    return () => window.removeEventListener('open-consult-form', openForm)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setShowForm(false)
      setSubmitted(false)
      setForm({ name: '', phone: '', company: '', needs: '' })
    }, 2500)
  }

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
              <button className="btn btn-primary text-lg px-12 py-4" onClick={() => setShowForm(true)}>
                立即预约咨询
              </button>
              <p className="text-white/40 text-sm mt-4">
                联系人：高先生 | 电话：15012909024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal overlay */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => !submitted && setShowForm(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-orange-400 to-orange-500"></div>

            {submitted ? (
              /* Success state */
              <div className="p-10 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">提交成功</h3>
                <p className="text-gray-500">感谢提交，我们会尽快联系您！</p>
              </div>
            ) : (
              /* Form state */
              <form onSubmit={handleSubmit} className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">预约咨询</h3>
                  <button type="button" className="text-gray-400 hover:text-gray-600 transition-colors" onClick={() => setShowForm(false)}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="您的姓名"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="联系电话"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="公司名称"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400"
                  />
                  <textarea
                    rows={3}
                    placeholder="请输入您的需求..."
                    value={form.needs}
                    onChange={(e) => setForm({ ...form, needs: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-gray-700 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn btn-primary text-lg py-3.5 mt-6">
                  提交咨询
                </button>

                <p className="text-center text-gray-400 text-xs mt-4">
                  我们承诺保护您的隐私信息
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default CTA
