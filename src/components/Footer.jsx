import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-1.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                <img src="/logo1.png" alt="华谦" className="w-full h-full object-cover scale-110" />
              </div>
              <img src="/logo6.png" alt="HuaQian" className="h-5" />
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              专注于为中小企业及中大型企业提供AI智能体标准化SaaS与企业级定制开发服务，
              利用前沿AI技术将员工从繁琐重复工作中解放，聚焦高价值创造性任务。
            </p>
            <div className="text-slate-500 text-sm">
              © 2026 华谦AI智能体 · 企业赋能系统
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">快速链接</h4>
            <div className="space-y-3">
              <a href="#about" className="footer-link block text-sm">关于我们</a>
              <a href="#capabilities" className="footer-link block text-sm">核心能力</a>
              <a href="#features" className="footer-link block text-sm">AI功能</a>
              <a href="#saas" className="footer-link block text-sm">SaaS方案</a>
              <a href="#custom" className="footer-link block text-sm">定制开发</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">联系我们</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p>联系人：高先生</p>
              <p>电话：15012909024</p>
              <p>邮箱：huaqian@huaqian.cc</p>
              <p>地址：深圳市宝安区新安三路一巷24号汇聚宝安湾智创园B栋五楼503A</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            用AI智能体替代重复工作，提升效率，降本增效
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-primary text-sm transition-colors">隐私政策</a>
            <a href="#" className="text-slate-500 hover:text-primary text-sm transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer