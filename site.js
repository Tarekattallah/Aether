/**
 * AETHER — Engineering Systems & Client Script
 * The Invisible Force Behind Intelligent Systems
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Ether Ambient Particle Canvas (The 5th Element Medium)
     ========================================================================== */
  const canvas = document.getElementById('ether-canvas');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 42;
    const maxDistance = 140;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.8 + 0.8;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 242, 254, 0.45)';
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });

    resize();
    initParticles();
    animate();
  }

  /* ==========================================================================
     2. Hero Node Interactivity
     ========================================================================== */
  const nodeCaptions = {
    ai: 'بناء وكلاء ذكاء اصطناعي ذاتية التوجيه (Agentic Workflows) تربط النماذج اللغوية بقواعد بياناتك وأدواتك لتنفيذ العمليات دون تدخل بشري.',
    software: 'تطوير منصات سحابية وأنظمة SaaS قوية قابلة للتوسع بملايين الطلبات، مصممة من الصفر بأكواد مخصصة دون قوالب جاهزة.',
    integration: 'تكامل آمن وفوري بين أنظمة الـ ERP، بوابات الدفع، المستودعات، وبرامج الـ CRM لإنهاء تشتت البيانات وضمان التزامن اللحظي.',
    uiux: 'تصميم وهندسة واجهات مستخدم فائقة الاستجابة وسريعة التحميل، تركز على رفع معدلات التحويل وتسهيل إدارة العمليات المعقدة.',
    mvp: 'تحويل الأفكار والمنتجات الأولية إلى برمجيات حقيقية في أيدي العملاء والمستثمرين خلال أسابيع معدودة وبنية كود تدوم طويلاً.'
  };

  const captionText = document.getElementById('console-caption-text');
  const hubNodes = document.querySelectorAll('.hub-node');

  hubNodes.forEach(node => {
    node.addEventListener('click', () => {
      const type = node.dataset.node;
      if (nodeCaptions[type] && captionText) {
        captionText.style.opacity = '0';
        setTimeout(() => {
          captionText.textContent = nodeCaptions[type];
          captionText.style.opacity = '1';
        }, 150);
      }
    });
  });

  /* ==========================================================================
     3. Architecture Sandbox Simulation (Tab Switching & Real-Time Logs)
     ========================================================================== */
  const sandboxConfigs = {
    'ai-agent': {
      status: 'SIMULATION: AGENTIC_WORKFLOW_ACTIVE',
      latency: '14ms',
      step1: { title: 'مدخلات العميل / النظام', desc: 'طلب عميل عبر واتساب أو تذكرة جديدة على المنصة' },
      step2: { title: 'وكيل AETHER الذاتي', desc: 'استخراج النوايا، استعلام قاعدة المعرفة (Vector Search)، وتحديد القرار' },
      step3: { title: 'إجراء مؤتمت فوري', desc: 'تحديث حالة الطلب، إصدار الفاتورة، وإرسال الرد خلال ثوانٍ' },
      logs: [
        { time: '00:00.01', tag: 'INIT', type: 'info', text: 'Agentic Pipeline triggered by client webhook.' },
        { time: '00:00.05', tag: 'PARSE', type: 'info', text: 'Intent classified: [ORDER_MODIFICATION] with 99.4% confidence.' },
        { time: '00:00.09', tag: 'ENGINE', type: 'proc', text: 'Aether Agent executing state-machine workflow via LangGraph.' },
        { time: '00:00.14', tag: 'DONE', type: 'success', text: 'Database state committed. Client response delivered (14ms).' }
      ]
    },
    'erp-sync': {
      status: 'SIMULATION: ERP_SYSTEM_SYNC_ACTIVE',
      latency: '8ms',
      step1: { title: 'عملية بيع في المتجر', desc: 'إتمام دفع ناجح عبر بوابة الدفع الإلكتروني' },
      step2: { title: 'محرك مزامنة AETHER', desc: 'تحقق من الأرصدة، خصم المخزون، وإنشاء قيد محاسبي فوري' },
      step3: { title: 'تزامن الفروع والمستودع', desc: 'إشعار شركة الشحن وتحديث شاشات نقاط البيع (POS) فورياً' },
      logs: [
        { time: '00:00.01', tag: 'EVENT', type: 'info', text: 'Payment captured: Order #AE-8924.' },
        { time: '00:00.03', tag: 'BRIDGE', type: 'proc', text: 'Bridging Postgres -> Enterprise ERP Ledger via secure gRPC.' },
        { time: '00:00.06', tag: 'SYNC', type: 'proc', text: 'Warehouse inventory decrement propagated to 4 regional hubs.' },
        { time: '00:00.08', tag: 'SUCCESS', type: 'success', text: 'Zero data drift. Ledger balanced across all clusters.' }
      ]
    },
    'saas-scale': {
      status: 'SIMULATION: ENTERPRISE_SAAS_CLUSTER',
      latency: '19ms',
      step1: { title: '10,000+ طلب متزامن', desc: 'حركة مرور عالية على بوابات العملاء ولوحات التشغيل' },
      step2: { title: 'معمارية AETHER السحابية', desc: 'موازنة أحمال ذكية، عزل متعدد المستأجرين (Multi-tenant RBAC)' },
      step3: { title: 'استجابة فائقة السرعة', desc: 'تغذية البيانات اللحظية بزمن استجابة أقل من 20 ملي ثانية' },
      logs: [
        { time: '00:00.02', tag: 'LOAD', type: 'info', text: 'Inbound traffic spike: 12,400 requests/sec detected.' },
        { time: '00:00.07', tag: 'CLUSTER', type: 'proc', text: 'Autoscaling Redis cache layer & distributed worker nodes.' },
        { time: '00:00.12', tag: 'SECURITY', type: 'proc', text: 'Zero-trust JWT authentication verified across all endpoints.' },
        { time: '00:00.19', tag: 'STABLE', type: 'success', text: 'Uptime 99.99%. CPU utilization optimized at 34%.' }
      ]
    }
  };

  let currentFlow = 'ai-agent';
  const tabs = document.querySelectorAll('.sandbox-tab');
  const flowStatus = document.getElementById('flow-status');
  const flowLatency = document.getElementById('flow-latency');
  const step1Title = document.getElementById('step-1-title');
  const step1Desc = document.getElementById('step-1-desc');
  const step2Title = document.getElementById('step-2-title');
  const step2Desc = document.getElementById('step-2-desc');
  const step3Title = document.getElementById('step-3-title');
  const step3Desc = document.getElementById('step-3-desc');
  const terminalLogs = document.getElementById('terminal-logs');
  const btnRerunSim = document.getElementById('btn-rerun-sim');

  function renderSimulation(flowKey) {
    const config = sandboxConfigs[flowKey];
    if (!config) return;

    if (flowStatus) flowStatus.textContent = config.status;
    if (flowLatency) flowLatency.textContent = config.latency;
    if (step1Title) step1Title.textContent = config.step1.title;
    if (step1Desc) step1Desc.textContent = config.step1.desc;
    if (step2Title) step2Title.textContent = config.step2.title;
    if (step2Desc) step2Desc.textContent = config.step2.desc;
    if (step3Title) step3Title.textContent = config.step3.title;
    if (step3Desc) step3Desc.textContent = config.step3.desc;

    if (terminalLogs) {
      terminalLogs.innerHTML = '';
      config.logs.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `log-line ${item.type === 'success' ? 'highlight' : ''}`;
        div.style.opacity = '0';
        div.style.transform = 'translateY(4px)';
        div.style.transition = 'all 0.25s ease';

        const tagClass = item.type === 'success' ? 'log-success' : (item.type === 'proc' ? 'log-proc' : 'log-info');
        div.innerHTML = `<span class="log-time">[${item.time}]</span> <span class="${tagClass}">[${item.tag}]</span> ${item.text}`;
        terminalLogs.appendChild(div);

        setTimeout(() => {
          div.style.opacity = '1';
          div.style.transform = 'translateY(0)';
        }, index * 90);
      });
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFlow = tab.dataset.flow;
      renderSimulation(currentFlow);
    });
  });

  if (btnRerunSim) {
    btnRerunSim.addEventListener('click', () => {
      renderSimulation(currentFlow);
    });
  }

  /* ==========================================================================
     4. Interactive Scope Calculator & Direct WhatsApp Brief Generator
     ========================================================================== */
  const briefForm = document.getElementById('aether-brief-form');
  const briefResult = document.getElementById('brief-result');
  const briefSummary = document.getElementById('brief-summary');
  const btnWhatsAppSend = document.getElementById('btn-whatsapp-send');
  const btnDownloadBrief = document.getElementById('btn-download-brief');
  const briefTimestamp = document.getElementById('brief-timestamp');

  const serviceLabels = {
    'ai': 'حلول الذكاء الاصطناعي والأتمتة الذكية (AI & Agentic Workflows)',
    'saas': 'تطوير برمجيات مخصصة ومنصة SaaS',
    'integration': 'تكامل وربط أنظمة الـ ERP وقواعد البيانات',
    'uiux': 'تصميم وهندسة واجهات وتجربة المستخدم (UI/UX)',
    'mvp': 'إطلاق منتج أولي لشركة ناشئة (Startup MVP)',
    'fractional-cto': 'شراكة مكتب تقني متكامل (Fractional CTO Team)'
  };

  let generatedText = '';

  if (briefForm) {
    briefForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const serviceVal = briefForm.elements['service'].value;
      const regionVal = briefForm.elements['region'].value;
      const timelineVal = briefForm.elements['timeline'].value;
      const notesVal = briefForm.elements['notes'].value.trim();

      const serviceName = serviceLabels[serviceVal] || serviceVal;
      const uniqueId = 'AETHER-' + Math.floor(1000 + Math.random() * 9000);

      if (briefTimestamp) {
        briefTimestamp.textContent = `ID: ${uniqueId}`;
      }

      generatedText = [
        `ملخص متطلبات مشروع | شركة AETHER الهندسية`,
        `كود الطلب: ${uniqueId}`,
        `----------------------------------------`,
        `المجال التقني: ${serviceName}`,
        `السوق المستهدف: ${regionVal}`,
        `الجدول الزمني المطلوب: ${timelineVal}`,
        `----------------------------------------`,
        `نبذة المشروع وأهم الوظائف:`,
        notesVal,
        `----------------------------------------`,
        `الموقع: https://tarekattallah.github.io/Aether/`,
        `الفريق التأسيسي: 5 مهندسين متخصصين (Fractional CTO Partner)`
      ].join('\n');

      if (briefSummary) {
        briefSummary.textContent = generatedText;
      }

      // WhatsApp URL formatting
      const waNumber = '201061258009';
      const waMessage = encodeURIComponent(
        `مرحباً فريق مهندسي AETHER 👋\nقمت بتجهيز ملخص لمشروعي عبر موقعكم:\n\n` +
        `📌 المجال: ${serviceName}\n` +
        `🌍 السوق: ${regionVal}\n` +
        `⏱ الموعد: ${timelineVal}\n\n` +
        `📝 تفاصيل المتطلبات:\n${notesVal}\n\n` +
        `كود المشروع: ${uniqueId}`
      );

      if (btnWhatsAppSend) {
        btnWhatsAppSend.href = `https://wa.me/${waNumber}?text=${waMessage}`;
      }

      if (briefResult) {
        briefResult.hidden = false;
        briefResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // Download Spec Text File
  if (btnDownloadBrief) {
    btnDownloadBrief.addEventListener('click', () => {
      if (!generatedText) return;
      const blob = new Blob(['\uFEFF', generatedText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `AETHER-Project-Spec.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    });
  }

});
