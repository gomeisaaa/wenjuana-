// 量表结构与分维度题目
const questionnaire = [
    {
        name: "情感支持",
        max: 20,
        description: "你在遇到困难或压力时，宿舍成员给予的情感支持情况。",
        range: [0, 9, 19, 20],
        advice: [
            "你可以多跟室友沟通交流。",
            "进一步跟室友深入交流联络感情。",
            "可以继续保持当前的状态！"
        ],
        questions: [
            "当我情绪低落时，宿舍成员会主动安慰我。",
            "我在宿舍中感受到来自成员的共情与理解。",
            "宿舍成员愿意倾听我的烦恼并给予回应。",
            "我觉得我可以向宿舍成员倾诉困扰。"
        ]
    },
    {
        name: "社交互动",
        max: 20,
        description: "你与宿舍成员的日常交流及集体活动参与情况。",
        range: [0, 9, 19, 20],
        advice: [
            "你可以多和室友约饭和出行勇敢迈出这一步吧！",
            "你可以适当增加和室友出行的频率和互动的方式，相信你们之间的关系会更进一步~",
            "可以继续保持当前的社交互动方式！你们是彼此特别的存在！"
        ],
        questions: [
            "我与宿舍成员保持规律且自然的沟通交流。",
            "我们之间的交流是真诚的，而非表面寒暄。",
            "宿舍成员之间会主动发起交流或互动。",
            "与宿舍成员的互动让我感到轻松和愉快。"
        ]
    },
    {
        name: "冲突与应对策略",
        max: 20,
        description: "宿舍中冲突的发生频率及解决方式的有效性。",
        range: [0, 10, 19, 20],
        advice: [
            "你可以寻找让彼此更舒适的解决问题的方式，相信你们之间的话说开还会是彼此很好的伙伴~",
            "你可以加深你们之间的问题沟通上的问题，看是否有误解彼此语言上的问题，问题不隔夜~",
            "出现摩擦不可怕，而你已经掌握了如何让寝室关系保持和稳定发展的秘诀啦！"
        ],
        questions: [
            "当宿舍成员间出现矛盾时，我们能够直接沟通解决。",
            "宿舍内部若出现问题，我们能够集体协商应对。",
            "我和宿舍成员在矛盾后可以逐渐修复关系。",
            "当宿舍有问题时，大家通常选择冷处理而非沟通。（反向题）"
        ],
        reverse: [3] // 第4题为反向题（下标从0开始）
    },
    {
        name: "互相尊重",
        max: 20,
        description: "宿舍成员之间在生活习惯、隐私和个人空间等方面的尊重程度。",
        range: [0, 10, 18, 20],
        advice: [
            "你可以告诉室友你自身的边界，同时了解他人的边界，为寝室关系推进一步打下良好基础。",
            "你可以在平时相处的过程中告诉室友自己感觉到被冒犯的地方，在告诉他人边界的同时了解他人的边界，从而在合适的距离下发展更友好的关系。",
            "相信你一定是一个很细心的人，准确的知道自己和他人在生活中都要留有自己的一片土地，继续保持下去吧！"
        ],
        questions: [
            "宿舍成员尊重我的个人空间与生活习惯。",
            "宿舍成员能够遵守宿舍共同制定的规则。",
            "我能够自由地表达自己的意见而不担心被打断或嘲讽。",
            "宿舍成员不会随意使用我的个人物品。"
        ]
    },
    {
        name: "合作与共享",
        max: 20,
        description: "宿舍成员在日常事务中的合作情况及资源共享的公平性。",
        range: [0, 11, 19, 20],
        advice: [
            "在进行寝室内务打扫或者有好东西分享的时候，记得及时友好的沟通哦~有来有往大家都会看在眼里，记在心里。",
            "相信你一定是一个负责任有很有分享欲的好室友，良好的寝室关系离不开你的付出~",
            "继续保持！"
        ],
        questions: [
            "宿舍成员愿意公平分担公共事务（如打扫、缴费等）。",
            "我们在资源共享方面会提前沟通达成共识。",
            "我们能够协调宿舍空间的使用（如洗漱时间、灯光使用）。",
            "宿舍成员愿意在需要时提供力所能及的帮助。"
        ]
    },
    {
        name: "归属感与安全感",
        max: 15,
        description: "你对宿舍环境的舒适度、安全感及归属感的体验。",
        range: [0, 13, 19, 20],
        advice: [
            "及时调整好自己的状态，树立良好的观念，少一些焦虑和急躁，把寝室当作是温馨的港湾吧~",
            "找出你缺失的那部分归属感和安全感的来源原因，在能力所及的范围内去解决它吧！收获一个更温馨的寝室氛围势在必得！",
            "相信寝室已经是你的温馨小窝了，继续去维持和守护它吧！"
        ],
        questions: [
            "我无需伪装或迎合他人就能被接纳。",
            "宿舍是我感到被理解与接纳的地方。",
            "我觉得宿舍是一个可以让我放松的地方。"
        ]
    },
    {
        name: "整体满意度",
        max: 15,
        description: "你对宿舍关系的整体满意程度及期望的改进方向。",
        range: [0, 8, 14, 15],
        advice: [
            "建议您可以尝试通过与宿舍成员沟通交流，选择更好地沟通交流方式，牢记合作共享原则，在必要时为彼此提供情感支持，共同营造一个更加和谐、温馨的宿舍环境。",
            "良好的寝室关系是精彩校园生活的一部分，可以尝试和室友进行更多深入地沟通与了解，共同营造一个更加和谐、温馨的宿舍环境。",
            "无话不谈心有灵犀的室友是你精彩校园生活的一部分，请继续保持下去哦~"
        ],
        questions: [
            "总体而言，我对目前宿舍关系感到满意。",
            "我愿意继续与现在的宿舍成员共处。",
            "我会向他人推荐我现在的宿舍关系模式。"
        ]
    }
];

// 总分区间
const totalScoreRanges = [
    { min: 26, max: 82, result: "不良", advice: "当前您的寝室关系评分处于一个不良的状态，建议您可以尝试通过与宿舍成员沟通交流，选择更好地沟通交流方式，牢记合作共享原则，在必要时为彼此提供情感支持，共同营造一个更加和谐、温馨的宿舍环境。如果你有任何疑问或需要进一步的帮助，欢迎随时与我们联系。" },
    { min: 83, max: 111, result: "良好", advice: "当前你的寝室关系评分处于一个良好的状态，良好的寝室关系是精彩校园生活的一部分，可以尝试和室友进行更多深入地沟通与了解，共同营造一个更加和谐、温馨的宿舍环境。如果你有任何疑问或需要进一步的帮助，欢迎随时与我们联系。" },
    { min: 112, max: 130, result: "优秀", advice: "当前你的寝室关系评分处于一个优秀的状态，无话不谈心有灵犀的室友是你精彩校园生活的一部分，请继续保持，共同营造一个更加和谐、温馨的宿舍环境。如果你有任何疑问或需要进一步的帮助，欢迎随时与我们联系。" }
];

// 反向题处理
function reverseScore(val) {
    return 6 - val;
}

// 渲染题目
function renderQuestions() {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';
    let qIndex = 1;
    questionnaire.forEach((dim, dimIdx) => {
        const dimTitle = document.createElement('div');
        dimTitle.className = 'dimension-title';
        dimTitle.textContent = `${dimIdx + 1}. ${dim.name}`;
        questionsDiv.appendChild(dimTitle);
        dim.questions.forEach((q, idx) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'question';
            qDiv.innerHTML = `<div class="question-text">${qIndex}. ${q}</div><div class="options">` +
                [1,2,3,4,5].map(val => `<span class="option"><label><input type="radio" name="q${qIndex}" value="${val}" required> ${val}</label></span>`).join('') +
                `</div>`;
            questionsDiv.appendChild(qDiv);
            qIndex++;
        });
    });
}

// 事件绑定
window.onload = function() {
    document.getElementById('startSurvey').onclick = function() {
        document.getElementById('guide').classList.add('hidden');
        document.getElementById('surveyForm').classList.remove('hidden');
        renderQuestions();
    };
    document.getElementById('surveyForm').onsubmit = function(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // 用户信息
        const name = formData.get('name');
        const gender = formData.get('gender');
        const dorm = formData.get('dorm');
        const date = new Date().toLocaleDateString();
        // 答案收集
        let answers = [];
        for(let i=1;i<=26;i++){
            answers.push(Number(formData.get('q'+i)));
        }
        // 计算分数
        let total = 0;
        let dimScores = [];
        let qPtr = 0;
        questionnaire.forEach((dim, dimIdx) => {
            let score = 0;
            dim.questions.forEach((q, idx) => {
                let val = answers[qPtr];
                // 反向题处理
                if(dim.reverse && dim.reverse.includes(idx)){
                    val = reverseScore(val);
                }
                score += val;
                qPtr++;
            });
            dimScores.push(score);
            total += score;
        });
        // 生成报告
        showReport({name, gender, dorm, date, total, dimScores});
    };
};

// 生成报告
function showReport({name, gender, dorm, date, total, dimScores}) {
    document.getElementById('surveyForm').classList.add('hidden');
    const reportDiv = document.getElementById('report');
    reportDiv.classList.remove('hidden');
    let html = `<div><b>基本信息</b><br>姓名：${name}　性别：${gender}　宿舍号：${dorm}　评估日期：${date}<br>常模参照：<br></div>`;
    html += `<div class="score-section"><div class="score-title">总分评估</div><div class="score-value">总分：${total}/130 分</div>`;
    // 总分区间
    let totalRange = totalScoreRanges.find(r => total >= r.min && total <= r.max);
    html += `<div class="score-interpretation">${totalRange ? totalRange.advice.replace('[value]', total) : ''}</div></div>`;
    // 各维度
    html += `<div class="score-section"><div class="score-title">各维度得分</div>`;
    let qIdx = 0;
    questionnaire.forEach((dim, idx) => {
        let state = '';
        let score = dimScores[idx];
        // 区间判断
        let rangeIdx = 0;
        for(let i=1;i<dim.range.length;i++){
            if(score <= dim.range[i]){
                rangeIdx = i-1; break;
            }
        }
        html += `<div style="margin-bottom:10px;"><b>${dim.name}</b>：${score}/${dim.max} 分<br><span style="color:#888;">${dim.description}</span><br><span style="color:#2980b9;">${dim.advice[rangeIdx]}</span></div>`;
        qIdx += dim.questions.length;
    });
    html += `</div>`;
    // 综合分析
    html += `<div class="score-section"><div class="score-title">综合分析</div>`;
    html += `<div>您的得分为：${total}分<br>${totalRange ? totalRange.advice.replace('[value]', total) : ''}</div>`;
    html += `</div>`;
    // 重新填写按钮
    html += `<button class="btn" onclick="location.reload()">重新填写问卷</button>`;
    document.getElementById('reportContent').innerHTML = html;
} 