// posts.js — All blog post data for 快樂學習 iPAS 一次就過！
const POSTS = [
  // ===== 2026/03 =====
  {
    id: "115-ipas-ai_11",
    title: "115 年度 iPAS AI 應用規劃師新增之「關鍵法規與評測架構」考綱內容",
    date: "2026-03",
    labels: ["講義整理", "AI 核心定義與治理框架", "考試攻略"],
    excerpt: "針對 115 年度 iPAS AI 應用規劃師新增之「關鍵法規與評測架構」考綱內容，整理《人工智慧基本法》與 AIEC 評測重點與精選題目解析。",
    content: `
      <h2>一、《人工智慧基本法》：AI 治理新高度</h2>
      <h3>重點整理：</h3>
      <ol>
        <li><strong>生效時間與定位：</strong>台灣首部 AI 專法於 2026 年 1 月正式生效，象徵 AI 治理正式納入國家能力鑑定範疇。</li>
        <li>
          <strong>主管機關陷阱（必考重點）：</strong>
          <ul>
            <li>中央主管機關及 AI 戰略幕僚單位為<strong>「國家科學及技術委員會（國科會）」</strong>。</li>
            <li>數位發展部的主要角色是建立「風險分類框架」及提供評測工具。</li>
          </ul>
        </li>
        <li><strong>AI 的法律定義：</strong>系統必須具備<strong>「自主運行能力」</strong>，並能產生預測、建議或決策。僅依固定規則執行的「規則式軟體」（Rule-based）不被視為 AI。</li>
        <li>
          <strong>七大基本原則（口訣：永人隱資透公問）：</strong>
          <ul>
            <li>永續發展：兼顧社會公平與環境。</li>
            <li>人類自主：確保人為可控，不取代人類道德判斷。</li>
            <li>隱私保護：採資料最小化原則，保護個資。</li>
            <li>資安安全：建立防護措施，確保系統穩健。</li>
            <li>透明可解釋：產出需標記，讓使用者理解其運作邏輯。</li>
            <li>公平不歧視：避免演算法產生偏差或歧視特定群體。</li>
            <li>問責機制：各階段開發與部署者需承擔相應責任。</li>
          </ul>
        </li>
      </ol>

      <h2>二、AIEC 產品與系統評測：落實可信任 AI</h2>
      <h3>重點整理：</h3>
      <ol>
        <li><strong>評測單位：</strong>數位發展部成立 AIEC（AI 產品與系統評測中心），作為 AI 界的「國家級檢驗局」。</li>
        <li>
          <strong>五大防呆指標（評測支柱）：</strong>
          <ul>
            <li>準確性（Accuracy）：提供精確、即時的事實。</li>
            <li>可靠性（Reliability）：在極端或未知情況下仍能穩定運作。</li>
            <li>公平性（Fairness）：確保無性別、年齡或社會價值偏見。</li>
            <li>隱私（Privacy）：防止對話紀錄或資料外洩。</li>
            <li>資安（Secure）：抵禦惡意誘騙與安全威脅。</li>
          </ul>
        </li>
        <li><strong>在地化測試：</strong>強調 AI 必須符合台灣社會共識與語言文化（例如分辨優酪乳與酸奶的用語差異）。</li>
      </ol>

      <h2>精選練習題與解析</h2>
      <div class="qa-block">
        <p class="question">題目 1：根據《人工智慧基本法》，關於我國 AI 政策的統籌協調、推動及督導，其幕僚作業單位為下列何者？<br>(A) 數位發展部 (B) 國家科學及技術委員會（國科會） (C) 經濟部產業發展署 (D) 行政院</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">中央主管機關與戰略委員會的幕僚作業均由「國科會」辦理，數位部則負責風險分類框架等實務執行面。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 2：數位部 AIEC 針對 AI 產品提出的五大評測指標中，哪一項最強調系統在面對突發數據或極端壓力環境下，仍能穩健運作且不隨意崩潰？<br>(A) 準確性 (B) 公平性 (C) 可靠性 (D) 隱私</p>
        <span class="answer-tag">解答：(C)</span>
        <div class="analysis">「可靠性」指標旨在確保 AI 能穩定應對非預期狀況，而不僅僅是給出正確答案（準確性）。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 3：關於《人工智慧基本法》中所定義之 AI 系統原則，下列敘述何者不符合「人類自主性」之要求？<br>(A) 必須允許人類進行監督 (B) AI 系統應能完全取代人類進行關鍵醫療診斷決策 (C) 尊重人類道德判斷 (D) 必須留有人為干預機制</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">人類自主原則強調「AI 不可完全取代人類決策」，在關鍵場景如醫療或金融，必須保留人類最終決策權，此即 Human-in-the-loop 的概念。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 4：下列何種應用場景最符合「AI 產品與系統評測」中的「公平性」指標測試範疇？<br>(A) 測試 AI 翻譯系統是否會將「優酪乳」翻成「酸奶」 (B) 檢查 AI 信用評分模型是否因性別給出歧視性評分 (C) 系統是否能在離線環境下保護用戶數據 (D) 測試模型在遭受駭客攻擊時是否會產生錯誤回報</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">公平性指標專注於檢測演算法是否產生偏見，避免因特定屬性對群體造成歧視之結果。選項 (A) 為在地化，(C) 為隱私，(D) 為資安。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 5：依據法律規範，下列何者「不屬於」《人工智慧基本法》所定義之 AI 系統？<br>(A) 能自動生成廣告文案的大型語言模型 (B) 根據即時感測資訊進行路況判斷的自動駕駛系統 (C) 僅依照固定之 if-then 規則執行的自動回覆程式 (D) 具備自主學習能力的智慧推薦演算法</p>
        <span class="answer-tag">解答：(C)</span>
        <div class="analysis">法規定義 AI 需具備「自主運行能力」並透過機器學習與演算法運作，傳統的「規則式軟體」（Rule-based）被排除在定義之外。</div>
      </div>
    `
  },
  {
    id: "115-ipas-ai-ai",
    title: "115 年度 iPAS AI 應用規劃師科目二「生成式 AI 應用與規劃」新增評鑑內容",
    date: "2026-03",
    labels: ["講義整理", "考試攻略"],
    excerpt: "115 年度科目二新增提示工程（CoT/ToT/APE）、RAG、AI Agent、MCP 協議及企業導入評估框架（技法組效）等重點。",
    content: `
      <h2>一、生成式 AI 核心變革重點</h2>
      <ol>
        <li>
          <strong>提示工程（Prompt Engineering）深度化：</strong>
          <ul>
            <li>從簡單的指令撰寫轉向更複雜的框架設計與優化。</li>
            <li>新增技術項目：包含 Few-shot（少樣本學習）、CoT（思考鏈）、ToT（思維樹）與 APE（自動提示工程）。重點在於如何透過結構化提示引導 LLM 進行複雜邏輯推理。</li>
          </ul>
        </li>
        <li>
          <strong>檢索增強生成（RAG）實務應用：</strong>
          <ul>
            <li>核心功能：讓 AI 在回答前先「查閱外部知識庫」，有效解決 AI 的<strong>幻覺（Hallucination）</strong>問題與知識過時問題。</li>
            <li>評鑑重點：著重於 RAG 架構的導入規劃，以及如何整合企業內部文件系統。</li>
          </ul>
        </li>
        <li>
          <strong>人工智慧代理系統（AI Agent）：</strong>
          <ul>
            <li>技術躍升：從「對話機器人」進化為能自主任務規劃、執行 API 調用並進行多代理協作的系統。</li>
            <li>關鍵協議：納入最新的 MCP（Model Context Protocol）模型上下文協議等架構考量。</li>
          </ul>
        </li>
        <li>
          <strong>現代化開發與導入工具：</strong>
          <ul>
            <li>編輯器體驗：區分 Cursor（強項在於跨檔案的上下文理解）與 GitHub Copilot（強項在於代碼行內補全）。</li>
            <li>企業平台：納入 Copilot Studio 等 No-code / Low-code 工具，強調 AI 民主化與快速原型開發。</li>
          </ul>
        </li>
        <li>
          <strong>導入評估框架（技法組效）：</strong>
          <ul>
            <li>企業導入 AI 必須從四大面向評估：技術面向、法規面向、組織面向、效益面向（簡稱「技法組效」）。</li>
            <li>風險管理：強調個人識別資訊（PII）處理、資料最小化原則、去識別化，以及 AI 生成內容必須經由人類覆核的問責機制。</li>
          </ul>
        </li>
      </ol>

      <h2>精選練習題與解析</h2>
      <div class="qa-block">
        <p class="question">題目 1：若希望有效解決大型語言模型（LLM）因缺乏即時資訊而產生的「幻覺」現象，應優先考量下列哪項技術？<br>(A) 增加模型微調的資料量 (B) 使用更長的核心採樣 (C) 導入檢索增強生成（RAG）架構 (D) 擴大模型的參數量</p>
        <span class="answer-tag">解答：(C)</span>
        <div class="analysis">RAG 技術讓模型在回答前先從外部資料庫檢索相關事實，是目前公認降低幻覺與解決時效性問題最直接且有效的方法。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 2：關於提示工程技術，下列何者能引導模型逐步拆解問題，並展現邏輯推理過程以提高答案準確度？<br>(A) Zero-shot (B) Chain of Thought (CoT) (C) APE (D) Few-shot</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">CoT（思考鏈）透過提示模型「一步步思考」，引導其在輸出最終答案前先進行中間邏輯推理。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 3：AI Agent 與傳統 Chatbot 最顯著的技術區別為何？<br>(A) 能更精準地識別使用者的語氣與情緒 (B) 具備自主任務規劃、工具使用與 API 調用能力 (C) 回應速度更快 (D) 僅能處理文字資訊，無法處理多模態資料</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">AI Agent 的核心特質在於其自主性，能根據目標主動調用外部工具（如執行 Python 代碼、查詢資料庫 API），而非單純被動回應。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 4：某製造業公司在導入 AI 專案時，針對「既有工作流程的變動幅度」以及「員工接受度」進行分析。這屬於導入評估（技法組效）中的哪一個面向？<br>(A) 技術面向 (B) 法規面向 (C) 組織面向 (D) 效益面向</p>
        <span class="answer-tag">解答：(C)</span>
        <div class="analysis">組織面向專注於評估 AI 對組織架構、員工心理及業務流程變革帶來的影響。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 5：關於 Cursor 與 GitHub Copilot 的區分重點，下列敘述何者正確？<br>(A) Cursor 僅限於單一檔案代碼生成 (B) GitHub Copilot 是獨立的作業系統 (C) Cursor 提供深度整合的「跨檔案上下文理解」，GitHub Copilot 則以「行內自動補全」著稱 (D) 兩者功能完全重疊</p>
        <span class="answer-tag">解答：(C)</span>
        <div class="analysis">Cursor 強調的是整個編輯器級別的 AI 理解力（全專案感知），而 Copilot 最初的核心競爭力在於代碼編輯器中的即時補全功能。</div>
      </div>
    `
  },
  {
    id: "115-ipas-ai",
    title: "115 年度 iPAS AI 應用規劃師科目一（基礎概論）新增之評鑑內容",
    date: "2026-03",
    labels: ["講義整理", "AI 核心定義與治理框架"],
    excerpt: "115 年度科目一新增 AI 治理與法規、特徵工程/資料標準化，以及多模態學習（Multimodal AI）等三大區塊。",
    content: `
      <h2>一、AI 治理與法規</h2>
      <h3>重點整理：</h3>
      <ol>
        <li>
          <strong>《人工智慧基本法》：</strong>
          <ul>
            <li>主管機關：中央主管機關與 AI 戰略幕僚單位為<strong>「國家科學及技術委員會（國科會）」</strong>，而非數位發展部，這是考試最常見的陷阱題。</li>
            <li>AI 的法律定義：系統必須具備<strong>「自主運行能力」</strong>，並透過機器學習及演算法實現預測、內容、建議或決策。傳統的規則式軟體（Rule-based）不被視為 AI。</li>
            <li>七大基本原則：永續發展與福祉、人類自主、隱私保護與資料治理、資安與安全、透明與可解釋、公平與不歧視、問責。</li>
            <li>創新實驗環境：參考歐盟制度，推動 Regulatory Sandbox（監理沙盒/創新實驗環境），讓企業在受控環境下進行開發與測試。</li>
          </ul>
        </li>
        <li>
          <strong>金融業 AI 運用指引：</strong>
          <ul>
            <li>核心理念：包含治理與問責、重視公平性、保護隱私及客戶權益、確保系統穩健性與安全性、落實透明性與可解釋性、促進永續發展。</li>
            <li>系統生命週期：明確分為「系統規劃及設計」、「資料蒐集及輸入」、「模型建立及驗證」、「系統部署及監控」四個階段。</li>
          </ul>
        </li>
        <li>
          <strong>AI 產品與系統評測：</strong>
          <ul>
            <li>評測單位：數位發展部成立 AIEC（AI 產品與系統評測中心） 作為國家級檢驗機構。</li>
            <li>五大指標（防呆支柱）：準確性、可靠性、公平性、隱私、資安。</li>
          </ul>
        </li>
      </ol>

      <h2>二、資料處理深化</h2>
      <h3>重點整理：</h3>
      <ol>
        <li>
          <strong>特徵工程（Feature Engineering）：</strong>
          <ul>
            <li>定義：透過數據轉換提升模型對目標變數的預測能力。</li>
            <li>特徵縮放：處理異常大的值或不同量級的數據，避免特定特徵主導訓練。</li>
            <li>特徵交叉（Feature Cross）：將多個特徵組合以捕捉非線性關係（如：星期 + 小時）。</li>
            <li>One-hot 編碼：將類別型資料（如：交通方式）轉化為數值。</li>
          </ul>
        </li>
        <li>
          <strong>資料標準化（Standardization / Scaling）：</strong>
          <ul>
            <li>最小-最大縮放（Min-Max Scaling）：將數據壓縮到 0 與 1 之間。</li>
            <li>Z-score 標準化：將數據轉換為均值為 0，標準差為 1 的分佈。</li>
            <li>目的：消除單位影響（如：房價 vs. 坪數），提升梯度下降演算法的收斂速度與模型穩定性。</li>
          </ul>
        </li>
        <li><strong>實務流程（ETL）：</strong>包含資料抽取（Extract）、轉換（Transform，含清理與排序）與載入（Load）。</li>
      </ol>

      <h2>三、多模態學習（Multimodal AI）</h2>
      <h3>重點整理：</h3>
      <ol>
        <li><strong>定義：</strong>同時利用多種資料類型（文字、圖像、音訊、影片等模態）進行洞察、預測或產生內容的 AI 系統。</li>
        <li>
          <strong>技術特性：</strong>
          <ul>
            <li>共同嵌入空間（Shared Embedding Space）：將不同模態（如圖、文）映射至同一空間，實現跨模態理解。</li>
            <li>對比式學習（Contrastive Learning）：如 CLIP 模型，透過文字提示直接進行影像識別，達成「零樣本分類」。</li>
          </ul>
        </li>
        <li><strong>企業應用：</strong>多用於自動駕駛（感知多種感測器資料）、醫療診斷（影像結合病歷文字）、智慧客服（語音結合文本意圖）。</li>
      </ol>

      <h2>精選練習題與解析</h2>
      <div class="qa-block">
        <p class="question">題目 1：根據《人工智慧基本法》，關於我國 AI 政策的統籌與戰略幕僚作業單位，下列何者正確？<br>(A) 數位發展部 (B) 國家科學及技術委員會（國科會） (C) 經濟部產業發展署 (D) 工業技術研究院</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">根據法規，中央主管機關與戰略特別委員會的幕僚作業均由「國科會」辦理。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 2：在資料處理流程中，若發現某些屬性出現異常大的數值，應採取何種處理使所有值轉換到 0 至 1 之間？<br>(A) 資料組織 (B) 資料特徵縮放 (C) 資料清理 (D) 資料分析</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">特徵縮放中的「最小-最大縮放」可將數據壓縮至 0 到 1 之間，確保所有特徵在相同量級運作。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 3：關於多模態學習模型 CLIP 的關鍵技術特性，下列敘述何者正確？<br>(A) 僅能處理單一模態的文字資料 (B) 透過對比式學習將影像與文字映射至共同嵌入空間 (C) 需依賴大量標註影像才能識別新類別 (D) 主要用於語音辨識</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">CLIP 的優勢在於將圖像與文字映射至共同嵌入空間，使其能透過文字提示直接進行零樣本分類，不需額外標註訓練。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 4：在金融業 AI 運用生命週期中，哪一個階段的工作重點包含「選擇與建立模型演算法」及「驗證效能、安全性與機密性」？<br>(A) 系統規劃及設計 (B) 資料蒐集及輸入 (C) 模型建立及驗證 (D) 系統部署及監控</p>
        <span class="answer-tag">解答：(C)</span>
        <div class="analysis">模型建立及驗證階段專注於演算法選擇、模型訓練以及安全性的最終確認。</div>
      </div>
    `
  },
  {
    id: "115-2026ipas-ai",
    title: "115 年度（2026年）iPAS AI 應用規劃師鑑定的主要變革",
    date: "2026-03",
    labels: ["考試攻略", "iPAS AI 證照資源連結"],
    excerpt: "115 年度 iPAS AI 應用規劃師能力鑑定的六大主要變革：費用大降、證書效期縮短、考區擴張、考綱更新、法規入綱、成績抵免。",
    content: `
      <h2>一、報名費用大幅調降（115-116年限定）</h2>
      <p>為了擴大培養國內 AI 人才，政府推出專案優惠，將報名費降至原價的約三分之一：</p>
      <ul>
        <li>初級：從 1,200 元降至 <strong>400 元/科</strong>。</li>
        <li>中級：從 1,500 元降至 <strong>500 元/科</strong>。</li>
      </ul>
      <div class="highlight-box">⚠️ 注意：此優惠僅限 115 年至 116 年，117 年起將恢復原價。</div>

      <h2>二、證書效期與維護變更</h2>
      <ul>
        <li>初級證書：維持<strong>永久有效</strong>，不需換發。</li>
        <li>中級證書：效期由原本的 5 年縮短為 <strong>3 年</strong>。</li>
        <li>換證要求（中級）：需在 3 年內接受 48 小時以上的訓練（工作年資每一年可折抵 8 小時）。</li>
      </ul>

      <h2>三、考試行政與地點擴張</h2>
      <ul>
        <li>初級考試時間調整：115 年第一次考試（3月21日）調整至<strong>上午 9 點</strong>開始（過去多在下午）。</li>
        <li>名額翻倍：中級考試每梯次名額從 1,500 人增至 <strong>3,000 人</strong>。</li>
        <li>新增考區：初級新增花蓮、嘉義、屏東考區；中級新增桃園考區。</li>
      </ul>

      <h2>四、評鑑內容範圍（11502 更新版）</h2>
      <p>考試方向從單純的「工具理解」轉向「AI 導入規劃能力」。</p>
      <table>
        <tr><th>科目</th><th>新增內容</th></tr>
        <tr><td>科目一（基礎概論）</td><td>AI 治理與法規（人工智慧基本法、金融業 AI 指引、AI 產品評測）；資料處理深化（特徵工程、資料標準化）；多模態學習（Multimodal AI）</td></tr>
        <tr><td>科目二（生成式 AI）</td><td>提示工程（Few-shot、CoT、ToT、APE）；RAG（降低幻覺）；AI Agent（多代理、MCP）；現代化開發工具（Cursor、Copilot Studio）；導入評估框架（技法組效）</td></tr>
      </table>

      <h2>五、關鍵法規與評測架構入考綱</h2>
      <ul>
        <li>《人工智慧基本法》：2026 年 1 月正式生效，AI 治理正式納入考綱。</li>
        <li>主管機關陷阱：AI 政策統籌單位為「國科會」而非數發部。</li>
        <li>七大原則：永續發展、人類自主、隱私保護、資安安全、透明可解釋、公平不歧視、問責機制。</li>
        <li>AI 產品與系統評測：納入數位發展部 AIEC 的五大指標：準確性、可靠性、公平性、隱私、資安。</li>
      </ul>

      <h2>六、成績抵免政策</h2>
      <p>持有 iPAS 巨量資料分析師或機器學習工程師證書者，在 116 年底前可申請抵免對應科目。</p>
      <div class="info-box">例如：持有初級機器學習工程師證書，加考「人工智慧技術應用與規劃」一科及格即可取得中級 AI 證書。</div>
    `
  },

  // ===== 2026/02 =====
  {
    id: "blog-post-median",
    title: "有時候 平均數 不如 中位數 有意義",
    date: "2026-02",
    labels: ["講義整理", "數據基本功與資料工程"],
    excerpt: "用「薪資收入」做具體例子，說明為什麼有時候平均數不如中位數有意義——極端值（outlier）會大幅拉高平均數，使其失去代表性。",
    content: `
      <h2>情境設定：某公司 10 位員工月薪（單位：萬元）</h2>
      <p>3、3、3、3、3、4、4、4、5、<strong>50</strong></p>

      <h2>一、計算平均數</h2>
      <ul>
        <li>總和 = 3+3+3+3+3+4+4+4+5+50 = 82</li>
        <li>平均數 = 82 ÷ 10 = <strong>8.2 萬元</strong></li>
      </ul>
      <p>表面上看起來：「公司平均月薪 8.2 萬元」——似乎很高！</p>

      <h2>二、計算中位數</h2>
      <ul>
        <li>排序後，第 5 與第 6 位是 3 和 4</li>
        <li>中位數 = (3 + 4) ÷ 2 = <strong>3.5 萬元</strong></li>
      </ul>

      <h2>三、比較分析</h2>
      <table>
        <tr><th>指標</th><th>數值</th><th>代表意義</th><th>問題</th></tr>
        <tr><td>平均數</td><td>8.2 萬</td><td>每人平均收入</td><td>被 50 萬的高薪主管拉高</td></tr>
        <tr><td>中位數</td><td>3.5 萬</td><td>中間那個人的收入</td><td>更接近多數人真實狀況</td></tr>
      </table>

      <h2>四、為什麼平均數失真？</h2>
      <ul>
        <li>50 萬的主管屬於「極端值（outlier）」</li>
        <li>極端值會大幅拉高平均數</li>
        <li>但實際上 9 個人都在 3～5 萬之間</li>
      </ul>
      <div class="highlight-box">如果你是求職者：聽到「平均 8.2 萬」會誤以為普遍薪資很高，但實際多數人只有 3～4 萬。</div>

      <h2>五、結論（關鍵觀念）</h2>
      <ul>
        <li>當資料分布「不對稱」或有「極端值」時 → 中位數比平均數更能代表多數人的真實狀況</li>
        <li>當資料分布「對稱、沒有極端值」時 → 平均數才較具代表性</li>
      </ul>
      <div class="info-box">如果延伸到社會新聞常見的說法：「全國平均薪資提升」未必代表大多數人真的變有錢。很多時候，看中位數更貼近真實生活感受。</div>
    `
  },
  {
    id: "ai-judgment",
    title: "AI 技術很強，但判斷仍需要被正確引導",
    date: "2026-02",
    labels: ["AI知識圖解", "AI 核心定義與治理框架"],
    excerpt: "現代 AI 在運算、辨識、分析上都非常成熟，問題通常不出在「做不到」，而是出在「判斷方向錯了」。",
    content: `
      <h2>一、AI 技術真的不強嗎？</h2>
      <p>其實不是。現代 AI 在運算、辨識、分析上都非常成熟。問題通常不出在「做不到」，而是出在「<strong>判斷方向錯了</strong>」。</p>

      <h2>二、常見的 AI 判斷錯誤情境</h2>
      <h3>1. 把簡訊當垃圾</h3>
      <p>資訊本身沒有錯，但判斷標準過於保守，導致正常訊息被擋下來。</p>
      <h3>2. 把人影當成錯誤</h3>
      <p>感知到的畫面是對的，但情境判斷失準，結果做出錯誤反應。</p>
      <h3>3. 把正常行為誤判為風險</h3>
      <p>系統試圖「避免錯誤」，卻因此阻擋了正確行為。這不是技術弱，而是判斷設計問題。</p>
      <h3>4. 資訊沒錯，錯在判斷</h3>
      <p>資料正確、模型也正常，但決策邏輯一開始就偏了。</p>

      <h2>三、為什麼「判斷」這麼重要？</h2>
      <ul>
        <li>AI 不是自己決定要怎麼想</li>
        <li>而是依照人類設定的判斷規則運作</li>
      </ul>
      <div class="highlight-box">如果規則錯，再強的 AI，也只是在「快速犯錯」。</div>

      <h2>四、這也是學 AI 最容易忽略的地方</h2>
      <ul>
        <li>很多人專注在工具，卻忽略了「適不適合用 AI」</li>
        <li>真正重要的不是「會不會用」，而是「該不該用、怎麼判斷」</li>
      </ul>

      <h2>結語</h2>
      <div class="info-box">AI 技術很強，但判斷，仍需要被正確引導。</div>
    `
  },
  {
    id: "when-to-use-ai",
    title: "什麼情況適不適合用 AI？",
    date: "2026-02",
    labels: ["AI 核心定義與治理框架", "考試攻略"],
    excerpt: "資料夠多、目標明確、規則可量化 → 適合用 AI；資料少、價值判斷重、責任重大 → 不適合完全交給 AI。",
    content: `
      <h2>一句話判斷原則（重點版）</h2>
      <div class="highlight-box">
        <p>✅ 資料夠多、目標明確、規則可量化 → <strong>適合用 AI</strong></p>
        <p>⚠️ 資料少、價值判斷重、責任重大 → <strong>不適合完全交給 AI</strong></p>
      </div>

      <h2>為什麼「資料多、目標明確」適合用 AI？</h2>
      <p>當一個問題具備以下特性時，AI 特別容易發揮效果：</p>
      <ul>
        <li>有大量歷史資料可學習</li>
        <li>成功或失敗的標準清楚</li>
        <li>規則可以轉成數值或指標</li>
        <li>結果允許一定誤差</li>
      </ul>
      <p>常見例子包括：銷售預測、影像或語音辨識、推薦系統、重複性高的分類與判斷工作。</p>
      <p>在這類情境中，AI 的優勢是<em>速度快、成本低、可長時間運作</em>。</p>

      <h2>為什麼「價值判斷重」不適合完全交給 AI？</h2>
      <p>若問題本身具有以下特性，就需要特別小心：</p>
      <ul>
        <li>資料本來就不多或品質不穩定</li>
        <li>涉及道德、法律或人命風險</li>
        <li>結果需要人類承擔責任</li>
        <li>沒有明確的「對或錯」標準</li>
      </ul>
      <p>例如：醫療最終診斷、法律判決、人事去留決策、涉及倫理或公平性的決策。</p>
      <div class="info-box">在這些情境中，AI 可以輔助分析，但不適合成為唯一決策者。</div>

      <h2>教學與實務上的關鍵提醒</h2>
      <ul>
        <li>AI 是「判斷輔助工具」，不是責任承擔者</li>
        <li>問題越模糊，越需要人類介入</li>
        <li>好的 AI 應用，來自正確的「使用情境判斷」</li>
      </ul>

      <h2>總結（一句話帶走）</h2>
      <div class="highlight-box">先判斷問題性質，再選擇 AI，而不是反過來。</div>
    `
  },
  {
    id: "ai-pruning",
    title: "AI 剪枝（Pruning）",
    date: "2026-02",
    labels: ["AI知識圖解", "講義整理"],
    excerpt: "AI 剪枝是一種模型壓縮技術，透過移除神經網路中不重要的連接（權重）來縮小模型體積，使其能在資源有限的設備上運行。",
    content: `
      <h2>什麼是 AI 剪枝？</h2>
      <p>AI 剪枝（Pruning）是一種<strong>模型壓縮技術</strong>，透過移除神經網路中不重要的連接（權重）來縮小模型體積，使其能在資源有限的設備（如手機、嵌入式裝置）上運行。</p>

      <h2>剪枝的類型</h2>
      <table>
        <tr><th>類型</th><th>說明</th></tr>
        <tr><td>非結構化剪枝</td><td>移除個別權重（稀疏化），靈活但難以加速硬體推理</td></tr>
        <tr><td>結構化剪枝</td><td>移除整個神經元、卷積核或層，可直接縮減模型架構並加速推理</td></tr>
      </table>

      <h2>剪枝的流程</h2>
      <ol>
        <li>訓練原始模型至收斂</li>
        <li>評估各權重的重要性（如絕對值大小、梯度大小）</li>
        <li>移除低重要性的權重或結構</li>
        <li>對剪枝後的模型進行微調（Fine-tuning），恢復精度</li>
        <li>重複步驟 2～4（迭代剪枝）直到達到目標壓縮率</li>
      </ol>

      <h2>剪枝的優缺點</h2>
      <table>
        <tr><th>優點</th><th>缺點</th></tr>
        <tr><td>縮小模型體積（降低儲存需求）</td><td>可能損失一定精度</td></tr>
        <tr><td>加速推理速度（特別是結構化剪枝）</td><td>需要額外的微調步驟</td></tr>
        <tr><td>降低記憶體與能耗</td><td>設計複雜，需調整超參數</td></tr>
      </table>

      <div class="info-box">剪枝常與量化（Quantization）、知識蒸餾（Knowledge Distillation）一起使用，形成完整的模型壓縮方案。</div>
    `
  },

  // ===== 2026/01 =====
  {
    id: "ipas-ai-value",
    title: "除了 iPAS AI 證照外，真正學到？",
    date: "2026-01",
    labels: ["考試攻略", "iPAS AI 證照資源連結"],
    excerpt: "考 iPAS AI，不只是拿一張證照。真正帶來的收穫，遠超過證書本身——包括建立正確 AI 觀念、判斷能力、檢視結果能力，以及負責任的 AI 使用態度。",
    content: `
      <h2>除了 iPAS AI 證照以外，你真正學到什麼？</h2>
      <p>常有人問：「考 iPAS AI，只是拿一張證照嗎？」其實不然。以 iPAS AI 規劃師（初級／中級）為例，檢定真正帶來的收穫，遠超過證書本身。</p>

      <h2>考試過程中培養的能力</h2>
      <h3>建立 AI 基本觀念與正確理解</h3>
      <ul>
        <li>不只是背名詞</li>
        <li>而是理解 AI 在做什麼、不能做什麼</li>
        <li>分得清楚「適合用 AI」與「不適合用 AI」的情境</li>
      </ul>
      <h3>在有限時間內進行判斷與分析的能力</h3>
      <ul>
        <li>題目多為情境題</li>
        <li>必須在時間限制內快速抓出重點、做出合理判斷</li>
      </ul>
      <h3>檢視結果、找出問題的能力</h3>
      <ul>
        <li>判斷 AI 結果是否合理</li>
        <li>思考資料是否不足、目標是否錯置</li>
        <li>這正是實務上「避免 AI 亂用」的關鍵能力</li>
      </ul>
      <h3>培養理性、細心的 AI 使用態度</h3>
      <ul>
        <li>AI 不是越新越好</li>
        <li>而是要能負責任地使用</li>
        <li>不盲信、不濫用</li>
      </ul>

      <h2>當有人質疑「iPAS AI 證照有什麼用？」</h2>
      <p>你可以清楚地說明：</p>
      <ul>
        <li>我學會如何正確理解 AI</li>
        <li>我能在情境中判斷 AI 是否適合使用</li>
        <li>我會檢視 AI 產出的合理性</li>
        <li>我具備負責任使用 AI 的基本素養</li>
      </ul>
      <p>這些能力，本來就不只用在考試。</p>

      <h2>延伸總結</h2>
      <div class="highlight-box">
        <ul>
          <li>證照只是結果</li>
          <li>思考與判斷才是核心能力</li>
          <li>iPAS AI 檢定訓練的，是「會不會用 AI」</li>
          <li>而不是「會不會背 AI 名詞」</li>
        </ul>
      </div>
    `
  },
  {
    id: "overfitting",
    title: "過擬合（Overfitting）",
    date: "2026-01",
    labels: ["AI知識圖解", "講義整理"],
    excerpt: "過擬合：模型在訓練集表現極佳（如 98%），但在測試集表現極差（如65%）。俗稱「讀死書」——只會考古題，不會應付新問題。",
    content: `
      <h2>什麼是過擬合？</h2>
      <p>過擬合（Overfitting）是指模型在<strong>訓練集</strong>上學得太精確，反而在<strong>從未見過的測試集</strong>上表現很差的現象。</p>
      <div class="highlight-box">就像「讀死書」一樣——只會做做過的考古題，一遇到新題型就不會了。</div>

      <h2>症狀識別</h2>
      <table>
        <tr><th>狀況</th><th>訓練集準確率</th><th>測試集準確率</th><th>判斷</th></tr>
        <tr><td>過擬合</td><td>非常高（如 98%）</td><td>很低（如 65%）</td><td>差距過大 = 過擬合</td></tr>
        <tr><td>欠擬合</td><td>低（如 60%）</td><td>低（如 58%）</td><td>兩者都低 = 欠擬合</td></tr>
        <tr><td>理想</td><td>高（如 92%）</td><td>接近（如 89%）</td><td>差距小 = 泛化良好</td></tr>
      </table>

      <h2>解決方法（規劃師必知解藥）</h2>
      <ol>
        <li><strong>增加資料量：</strong>更多訓練樣本，讓模型學到更廣泛的規律。</li>
        <li><strong>加入正則化（L1/L2）：</strong>在損失函數中加入懲罰項，避免權重過大。</li>
        <li><strong>使用 Dropout：</strong>在神經網路訓練時隨機關閉部分神經元，防止過度依賴特定特徵。</li>
        <li><strong>實施早停法（Early Stopping）：</strong>監控驗證集損失，當其開始上升時停止訓練。</li>
        <li><strong>資料增強（Data Augmentation）：</strong>對圖像進行翻轉、裁切、旋轉，人工擴充資料多樣性。</li>
      </ol>

      <h2>欠擬合的解決方法</h2>
      <ol>
        <li>增加特徵工程（引入更多有意義的特徵）</li>
        <li>提升模型複雜度（換成更深的神經網路）</li>
        <li>減少正則化強度</li>
        <li>訓練更多輪（Epoch）</li>
      </ol>
    `
  },
  {
    id: "rag-ai",
    title: "RAG — 解決 AI 亂編事實的「幻覺」問題",
    date: "2026-01",
    labels: ["AI知識圖解", "講義整理"],
    excerpt: "RAG（檢索增強生成）：讓 AI 在回答前先「查閱外部知識庫」，有效解決幻覺（Hallucination）與知識過時問題。",
    content: `
      <h2>什麼是 AI 幻覺（Hallucination）？</h2>
      <p>大型語言模型（LLM）有時會<strong>自信地說出錯誤的資訊</strong>——這就是「幻覺」。原因是模型只依賴訓練時見過的資料，對於最新事件或特定領域知識無法正確回答。</p>

      <h2>RAG 是什麼？</h2>
      <p>RAG（Retrieval-Augmented Generation，檢索增強生成）是解決幻覺的最主流方法。</p>
      <div class="highlight-box">類比：就像允許學生「帶書考試」——可以查閱外部資料，不需要把所有東西都背起來。</div>

      <h2>RAG 的運作流程</h2>
      <ol>
        <li><strong>使用者提問</strong></li>
        <li>系統將問題轉換成<strong>向量（Embedding）</strong></li>
        <li>在<strong>向量資料庫</strong>中搜尋最相關的文件段落</li>
        <li>將找到的內容作為<strong>上下文（Context）</strong>注入到 LLM 的 Prompt 中</li>
        <li>LLM 根據真實資料生成準確回答</li>
      </ol>

      <h2>RAG vs. Fine-tuning vs. SaaS</h2>
      <table>
        <tr><th>方法</th><th>適合情境</th><th>難度</th><th>成本</th></tr>
        <tr><td>SaaS API</td><td>快速原型、通用任務</td><td>低</td><td>低～中</td></tr>
        <tr><td>RAG</td><td>需要即時資訊、私有知識庫</td><td>中</td><td>中</td></tr>
        <tr><td>Fine-tuning</td><td>特定語氣/格式、垂直專業領域</td><td>高</td><td>高</td></tr>
      </table>

      <h2>RAG 的優點</h2>
      <ul>
        <li>解決知識截止（Knowledge Cutoff）問題</li>
        <li>提供可溯源引用，增加可信度</li>
        <li>可整合企業私有文件，保護資料安全</li>
        <li>比 Fine-tuning 成本低且更新方便</li>
      </ul>
    `
  },
  {
    id: "knowledge-distillation",
    title: "知識蒸餾（Knowledge Distillation）",
    date: "2026-01",
    labels: ["AI知識圖解", "講義整理"],
    excerpt: "知識蒸餾：讓小模型模仿大模型的行為，達成「瘦身但不減智」的效果。小模型學的不是「正確答案」，而是老師的「思考邏輯」。",
    content: `
      <h2>什麼是知識蒸餾？</h2>
      <p>知識蒸餾（Knowledge Distillation, KD）是一種<strong>模型壓縮技術</strong>，讓小型「學生模型」模仿大型「教師模型」的輸出行為，使學生模型在體積小得多的情況下，仍保有接近教師的預測能力。</p>

      <h2>核心概念</h2>
      <div class="highlight-box">
        <p>教師模型（Teacher）→ 大型、高精度（如 GPT-4）</p>
        <p>學生模型（Student）→ 小型、輕量（如手機可用的模型）</p>
        <p>目標：學生學老師的「思維方式」，而非只學標準答案。</p>
      </div>

      <h2>技術細節</h2>
      <p>教師模型輸出的是一組<strong>軟標籤（Soft Labels）</strong>——即每個類別的機率分佈，而不是一個最終答案（硬標籤）。</p>
      <p>例如對一張狗的圖片，教師模型可能輸出：狗 85%、狼 10%、貓 5%。學生從這種「富含語意的分佈」中學習，效果遠勝於只學「答案是狗」。</p>

      <h2>知識蒸餾 vs. 模型剪枝</h2>
      <table>
        <tr><th>技術</th><th>方式</th><th>特點</th></tr>
        <tr><td>知識蒸餾</td><td>訓練一個全新的小模型</td><td>從零學習，靈活性高</td></tr>
        <tr><td>模型剪枝</td><td>移除既有模型的部分連接</td><td>基於現有模型修剪</td></tr>
      </table>

      <h2>應用場景</h2>
      <ul>
        <li>行動端 AI 部署（手機 APP）</li>
        <li>嵌入式系統（IoT 設備）</li>
        <li>降低雲端推理成本</li>
        <li>加快 API 回應時間</li>
      </ul>
    `
  },
  {
    id: "overfitting-underfitting-chart",
    title: "過擬合、欠擬合圖解",
    date: "2026-01",
    labels: ["AI知識圖解", "考前快速回顧"],
    excerpt: "用直觀圖解方式說明「過擬合」與「欠擬合」的差異、症狀與對應解決方案。",
    content: `
      <h2>核心概念：模型泛化能力</h2>
      <p>一個好的模型應該在<strong>訓練集</strong>和<strong>測試集</strong>上都有良好表現，代表它學到了真正的規律，而非死記訓練資料。</p>

      <h2>三種模型狀態對比</h2>
      <table>
        <tr><th>狀態</th><th>訓練集表現</th><th>測試集表現</th><th>問題</th><th>解決方向</th></tr>
        <tr><td>🔴 過擬合</td><td>極高（如 98%）</td><td>極低（如 62%）</td><td>記住訓練資料，無法泛化</td><td>正則化、Dropout、增加資料</td></tr>
        <tr><td>🟡 欠擬合</td><td>低（如 60%）</td><td>低（如 58%）</td><td>模型太簡單，無法捕捉規律</td><td>增加特徵、提升模型複雜度</td></tr>
        <tr><td>🟢 理想</td><td>高（如 92%）</td><td>接近（如 89%）</td><td>差距小，泛化良好</td><td>維持現狀</td></tr>
      </table>

      <h2>視覺化理解</h2>
      <div class="info-box">
        <p>想像你在教人分辨「貓」和「狗」的照片：</p>
        <ul>
          <li><strong>過擬合</strong>：你教了 100 張照片，學生背起來了全部，但看到第 101 張新圖就不會了。</li>
          <li><strong>欠擬合</strong>：學生只學到「四條腿的都是動物」，無法區分貓和狗。</li>
          <li><strong>理想</strong>：學生學到了貓和狗真正的特徵差異，看到新圖也能正確判斷。</li>
        </ul>
      </div>

      <h2>決策樹複雜度比喻</h2>
      <ul>
        <li>樹太深（分支太多）→ 過擬合，每個訓練樣本都有自己的路徑</li>
        <li>樹太淺（分支太少）→ 欠擬合，無法捕捉樣本差異</li>
        <li>剛好的深度 → 學到規律，能正確預測新樣本</li>
      </ul>
    `
  },
  {
    id: "mock-exam-links",
    title: "iPAS AI 初級、中級 — 線上模擬測驗",
    date: "2026-01",
    labels: ["模擬測驗", "考試攻略"],
    excerpt: "彙整 iPAS AI 初級與中級線上模擬測驗連結，包含科目一、科目二各份試題。",
    content: `
      <h2>iPAS AI 初級 — 線上模擬測驗</h2>
      <ul>
        <li><a href="https://forms.gle/BdFueNoLs8DPVoB17" target="_blank">1. iPAS AI初級模擬試題 I</a></li>
        <li><a href="https://forms.gle/qzPGwi6mpB7nqPaE8" target="_blank">2. iPAS AI初級模擬試題 II</a></li>
      </ul>

      <h2>iPAS AI 中級 — 線上模擬測驗</h2>
      <ul>
        <li><a href="https://forms.gle/YwEpjbGQWjyyN7ce8" target="_blank">1. iPAS AI中級人工智慧技術應用與規劃 - 線上模擬測驗</a></li>
        <li><a href="https://forms.gle/bDEemtoz396BXZKs7" target="_blank">2. iPAS AI中級 大數據分析 - 線上模擬測驗</a></li>
        <li><a href="https://forms.gle/8KMpQqA3Ndw5c9VX7" target="_blank">3. iPAS AI中級 機器學習 - 線上模擬測驗</a></li>
      </ul>

      <div class="info-box">
        <p>💡 <strong>模擬測驗使用建議：</strong></p>
        <ul>
          <li>第一次先不計時，確保每題都有讀懂</li>
          <li>第二次開始計時模擬正式考試節奏（約 60 分鐘/科）</li>
          <li>錯題務必回顧原文，找到正確概念</li>
          <li>重複練習弱點題組至少 3 次</li>
        </ul>
      </div>

      <h2>考試基本資訊</h2>
      <table>
        <tr><th>項目</th><th>初級</th><th>中級</th></tr>
        <tr><td>題數</td><td>40題/科</td><td>40題/科</td></tr>
        <tr><td>每題分數</td><td>1.25分</td><td>1.25分</td></tr>
        <tr><td>答錯倒扣</td><td>否</td><td>否</td></tr>
        <tr><td>及格分數</td><td>60分</td><td>60分</td></tr>
      </table>
    `
  },
  {
    id: "exam-sprint-advanced",
    title: "iPAS AI 應用規劃師——考前 3 小時核心衝刺（中級）",
    date: "2026-01",
    labels: ["考前快速回顧", "考試攻略", "iPAS AI 中級"],
    excerpt: "考前 3 小時核心衝刺：混淆矩陣計算、模型診斷術、GAI 導入路徑決策（SaaS/RAG/Fine-tuning）、治理與隱私保護、數據工程。",
    content: `
      <h2>一、必考計算：混淆矩陣（Confusion Matrix）與指標</h2>
      <h3>指標公式與心法：</h3>
      <table>
        <tr><th>指標</th><th>公式</th><th>心法（適用情境）</th></tr>
        <tr><td>精確率 (Precision)</td><td>TP / (TP + FP)</td><td>「抓得準」，防誤報（垃圾郵件、廣告投遞）</td></tr>
        <tr><td>召回率 (Recall)</td><td>TP / (TP + FN)</td><td>「抓得全」，防漏報（癌症偵測、盜刷、瑕疵檢測）</td></tr>
        <tr><td>F1-Score</td><td>2×P×R/(P+R)</td><td>資料不平衡的情境（正樣本僅佔 3%）</td></tr>
        <tr><td>準確率 (Accuracy)</td><td>(TP+TN)/(全部)</td><td>注意：數據極端不平衡時，準確率不具參考價值</td></tr>
      </table>
      <div class="highlight-box">
        <p>🔴 FP（型一錯誤/偽陽性）：像「狼來了」，原本沒事卻誤報。</p>
        <p>🟡 FN（型二錯誤/偽陰性）：像「漏掉狼」，原本有事卻誤以為沒事。</p>
      </div>

      <h2>二、模型診斷術：「問題–症狀–解藥」矩陣</h2>
      <table>
        <tr><th>問題</th><th>症狀</th><th>解藥</th></tr>
        <tr><td>過擬合 (Overfitting)</td><td>訓練集極佳 (98%)，測試集極爛 (65%)</td><td>增加資料量、加入正則化 (L1/L2)、使用 Dropout、早停法</td></tr>
        <tr><td>欠擬合 (Underfitting)</td><td>訓練集與測試集表現雙低</td><td>增加特徵工程、提升模型複雜度、減少正則化</td></tr>
      </table>

      <h2>三、GAI 導入路徑決策：SaaS vs. RAG vs. Fine-tuning</h2>
      <table>
        <tr><th>方法</th><th>適合情境</th><th>難度</th><th>成本</th></tr>
        <tr><td>SaaS / API</td><td>快速開箱即用，開發速度最快</td><td>低</td><td>低</td></tr>
        <tr><td>RAG</td><td>需要即時資訊、私有知識庫；「帶書考試」模式</td><td>中</td><td>中</td></tr>
        <tr><td>Fine-tuning</td><td>特定語氣/格式、垂直專業化；成本難度最高</td><td>高</td><td>高</td></tr>
      </table>
      <div class="info-box">⚠️ SaaS 使用個資或機密數據時，須考慮資料上雲的合規性。</div>

      <h2>四、治理與隱私保護重點</h2>
      <h3>歐盟 AI Act 風險分級：</h3>
      <ul>
        <li>🚫 <strong>不可接受風險：</strong>政府主導的「社會評分系統」，嚴格禁止。</li>
        <li>⚠️ <strong>高風險 (High-risk)：</strong>涉及人生重大前途（求職履歷篩選、貸款審核、醫療診斷）。</li>
      </ul>
      <h3>隱私技術手段：</h3>
      <ul>
        <li><strong>聯邦學習 (Federated Learning)：</strong>數據在地，參數在動——訓練時不移動原始資料。</li>
        <li><strong>去識別化：</strong>確保資料無法回推至特定個人（符合 GDPR）。</li>
        <li><strong>可解釋性 XAI（如 LIME）：</strong>解決「黑盒子」問題，讓銀行能解釋為何拒絕貸款。</li>
      </ul>

      <h2>五、數據工程與特徵處理</h2>
      <ol>
        <li><strong>ETL 流程：</strong>擷取 (Extract)、轉換 (Transform)、載入 (Load)。</li>
        <li><strong>One-Hot Encoding：</strong>血型 A/B/O 等無順序關係的類別資料應選此編碼方式。</li>
        <li><strong>PSI（Population Stability Index）：</strong>偵測模型退化最具指標性的指標，計算輸入特徵分佈變化。</li>
      </ol>

      <div class="highlight-box">
        <p>📝 衝刺叮嚀：</p>
        <ul>
          <li>閱讀關鍵字：注意題目問的是「首先」、「避免」還是「最適合」</li>
          <li>遇到情境衝突時，優先考慮商業價值與風險最小化</li>
          <li>答錯不倒扣：每題 1.25 分，請務必填滿所有答案</li>
        </ul>
      </div>
    `
  },
  {
    id: "glossary-advanced",
    title: "iPAS AI 應用規劃師必勝術語彙編（中級）",
    date: "2026-01",
    labels: ["考前快速回顧", "iPAS AI 中級"],
    excerpt: "彙整 iPAS AI 規劃師中級鑑定考試中最關鍵的專業術語：AI 技術類、專案管理類、數據工程類，及 114 年新興術語速查。",
    content: `
      <h2>一、AI 技術與模型類</h2>
      <table>
        <tr><th>縮寫</th><th>全名</th><th>白話說明</th></tr>
        <tr><td>LLM</td><td>Large Language Model</td><td>大語言模型。具備強大語言理解與生成能力，如 GPT-4。</td></tr>
        <tr><td>RAG</td><td>Retrieval-Augmented Generation</td><td>檢索增強生成。透過外部知識庫解決模型的「幻覺」與「即時性」問題。</td></tr>
        <tr><td>Fine-tuning</td><td>Fine-tuning</td><td>微調。針對特定任務，使用特定領域數據對預訓練模型進行再訓練。</td></tr>
        <tr><td>Overfitting</td><td>Overfitting</td><td>過度擬合。模型在訓練集表現極佳，但在測試集表現極差（俗稱讀死書）。</td></tr>
        <tr><td>XAI</td><td>Explainable AI</td><td>可解釋性 AI。讓人類能理解 AI 決策邏輯的技術，消除「黑箱」疑慮。</td></tr>
        <tr><td>Transformer</td><td>Transformer</td><td>生成式 AI 的核心架構，利用自注意力機制捕捉長距離語境依賴關係。</td></tr>
        <tr><td>Token</td><td>Token</td><td>權杖。AI 處理文字的最小單位，不一定是單字，可能是字根或片段。</td></tr>
        <tr><td>Embedding</td><td>Embedding</td><td>嵌入。將文字轉換成高維度的數值向量，語義接近的詞在空間中距離也較近。</td></tr>
        <tr><td>GAN</td><td>Generative Adversarial Network</td><td>生成對抗網路。由產生器與鑑別器組成，兩者在博弈對抗中提升生成品質。</td></tr>
        <tr><td>Diffusion</td><td>Diffusion Models</td><td>擴散模型。透過逐步加入與移除噪聲的反向過程來生成影像內容。</td></tr>
      </table>

      <h2>二、專案管理與維運類（MLOps）</h2>
      <table>
        <tr><th>縮寫</th><th>全名</th><th>白話說明</th></tr>
        <tr><td>POC</td><td>Proof of Concept</td><td>概念驗證。專案早期用於確認技術可行性的實驗性原型。</td></tr>
        <tr><td>ROI</td><td>Return on Investment</td><td>投資報酬率。衡量專案經濟效益的核心財務指標。</td></tr>
        <tr><td>TCO</td><td>Total Cost of Ownership</td><td>總體擁有成本。包含採購、開發、運維及 Token 消耗等所有支出。</td></tr>
        <tr><td>MLOps</td><td>Machine Learning Operations</td><td>機器學習維運。確保模型上線後的穩定佈署與持續訓練。</td></tr>
        <tr><td>SLA</td><td>Service Level Agreement</td><td>服務層級協議。規範服務可用性（如 99.9% 運作時間）的標準合約。</td></tr>
        <tr><td>KPI</td><td>Key Performance Indicator</td><td>關鍵績效指標。必須直接對應商業目標（而非僅看模型準確率）。</td></tr>
        <tr><td>PRD</td><td>Product Requirement Document</td><td>需求規格說明書。定義專案範疇、成功指標與技術限制條件。</td></tr>
      </table>

      <h2>三、數據工程與基礎設施類</h2>
      <ul>
        <li><strong>ETL：</strong>將原始數據轉化為 AI 訓練用數據的標準流程（擷取、轉換、載入）。</li>
        <li><strong>One-Hot Encoding：</strong>將無順序關係的分類資料（如顏色、血型）轉為 0 與 1 向量的技術。</li>
        <li><strong>Data Lake：</strong>資料湖。用於儲存原始格式數據的系統，可供後續 ELT 轉換。</li>
        <li><strong>SaaS：</strong>軟體即服務（如 ChatGPT Plus），導入速度最快。</li>
        <li><strong>IaaS：</strong>基礎設施即服務（如租用 GPU 伺服器）。</li>
      </ul>

      <h2>四、114/115 年新興術語速查</h2>
      <table>
        <tr><th>術語</th><th>白話說明</th></tr>
        <tr><td>MCP（Model Context Protocol）</td><td>AI 界的「萬能插座」。由 Anthropic 提出，標準化 AI 模型與外部工具、資料源之間的連接。</td></tr>
        <tr><td>Regulatory Sandbox（監理沙盒）</td><td>在風險受控的「安全空間」內進行法規豁免測試，鼓勵技術創新。</td></tr>
        <tr><td>LIME / SHAP</td><td>解決「黑盒子」問題的工具，透過擾動輸入來解釋單一個案的預測原因。</td></tr>
        <tr><td>Knowledge Distillation（知識蒸餾）</td><td>讓小模型模仿大模型的行為，達成「瘦身但不減智」的效果。</td></tr>
        <tr><td>MMLU</td><td>目前衡量大型語言模型綜合通識能力（涵蓋 57 個學科）的權威評測資料集。</td></tr>
      </table>
    `
  },
  {
    id: "xinbei-subsidy",
    title: "新北市教職員工 iPAS AI 應用規劃師能力鑑定補助計畫",
    date: "2026-01",
    labels: ["iPAS AI 證照資源連結", "考試攻略"],
    excerpt: "新北市教育局訂定補助計畫，以「通過能力鑑定」為補助標的，由學校彙整合格證明及繳費證明函報教育局申請。",
    content: `
      <h2>計畫說明</h2>
      <p>為提升本市教職員工生科技應用與 AI 專業知能，鼓勵積極參與經濟部 iPAS AI 應用規劃師能力鑑定，增進職能認證，教育局訂定「新北市教職員工 iPAS AI 應用規劃師能力鑑定補助計畫」。</p>

      <h2>補助方式</h2>
      <div class="info-box">
        <p>本補助計畫以<strong>「通過能力鑑定」</strong>為補助標的，由學校於每次成績公告後 <strong>1 個月內</strong>，彙整合格證明及繳費證明函報教育局申請。</p>
      </div>

      <h2>申請注意事項</h2>
      <ul>
        <li>適用對象：新北市公立學校教職員工</li>
        <li>補助條件：通過 iPAS AI 應用規劃師能力鑑定</li>
        <li>申請時間：成績公告後 1 個月內</li>
        <li>申請方式：由學校彙整，集體函報教育局</li>
      </ul>

      <p>詳細補助金額及相關規定請參閱：<a href="https://www.ntvs.ntpc.edu.tw/p/406-1000-21089,r104.php?Lang=zh-tw" target="_blank">新北市立學校公告</a></p>
    `
  },
  {
    id: "ipas-books",
    title: "iPAS 考試備考用書推薦",
    date: "2026-01",
    labels: ["備考用書", "iPAS AI 證照資源連結"],
    excerpt: "推薦三本 iPAS AI 備考用書：初級「一次考過」、初級「不死背也能高分」，以及中級「高分過關指南」。",
    content: `
      <h2>iPAS 初級推薦用書</h2>

      <div class="book-card">
        <p class="book-title">📘 iPAS AI 規劃師一次考過（初級）</p>
        <p>最新 2026 版，情境導向解析，術語白話拆解，符合最新命題方向。</p>
        <p><a href="https://play.google.com/store/books/details/%E8%AD%89%E7%85%A7%E9%81%94%E4%BA%BA%E7%A0%94%E7%A9%B6%E5%AE%A4%E8%AD%89%E7%85%A7%E7%B5%84_iPAS_AI_%E8%A6%8F%E5%8A%83%E5%B8%AB%E4%B8%80%E6%AC%A1%E8%80%83%E9%81%8E?id=Q3itEQAAQBAJ&hl=zh_TW" target="_blank">Google Play 電子書連結</a></p>
      </div>

      <div class="book-card">
        <p class="book-title">📗 不死背，也能高分的 iPAS AI（初級）</p>
        <p>理解導向設計，適合短期衝刺，非資工背景友善。</p>
        <p><a href="https://play.google.com/store/books/details/%E8%AD%89%E7%85%A7%E9%81%94%E4%BA%BA%E7%A0%94%E7%A9%B6%E5%AE%A4AI_%E7%B5%84_%E4%B8%8D%E6%AD%BB%E8%83%8C_%E4%B9%9F%E8%83%BD%E9%AB%98%E5%88%86%E7%9A%84_iPAS_AI?id=gB2zEQAAQBAJ&hl=zh_TW" target="_blank">Google Play 電子書連結</a></p>
      </div>

      <h2>iPAS 中級推薦用書</h2>

      <div class="book-card">
        <p class="book-title">📙 iPAS 中級 AI 應用規劃師高分過關指南（中級）</p>
        <p>理解導向設計，適合短期衝刺，含情境題專項訓練。</p>
        <p><a href="https://books.google.com.tw/books/about?id=5ki3EQAAQBAJ&redir_esc=y" target="_blank">Google Books 連結</a></p>
      </div>

      <h2>備考時間規劃建議（8 週範例）</h2>
      <table>
        <tr><th>週數</th><th>重點</th></tr>
        <tr><td>第 1-2 週</td><td>閱讀職能基準 + 建立筆記</td></tr>
        <tr><td>第 3-4 週</td><td>完成基礎概念整理</td></tr>
        <tr><td>第 5-6 週</td><td>模擬試題演練</td></tr>
        <tr><td>第 7 週</td><td>錯題分析與弱點補強</td></tr>
        <tr><td>第 8 週</td><td>總複習與時事更新</td></tr>
      </table>
    `
  },
  {
    id: "ipas-resources",
    title: "iPAS AI 證照資源連結",
    date: "2026-01",
    labels: ["iPAS AI 證照資源連結", "備考用書"],
    excerpt: "完整彙整 iPAS AI 應用規劃師備考指南：官方資源、準備策略、法規參考與書籍建議。",
    content: `
      <h2>iPAS AI 應用規劃師是什麼？</h2>
      <p>iPAS（Industry Professional Assessment System）為<strong>經濟部推動之產業人才能力鑑定制度</strong>，強調「職能基準導向」與「產業需求連結」。近年來已成為 AI 領域入門與職涯發展的重要證照之一。</p>

      <h3>iPAS AI 證照的定位</h3>
      <ul>
        <li>非程式導向證照</li>
        <li>強調 AI 應用判斷能力</li>
        <li>著重情境分析與問題解決思維</li>
        <li>適合非資工背景學習者</li>
      </ul>

      <h3>初級與中級差異</h3>
      <table>
        <tr><th>項目</th><th>初級</th><th>中級</th></tr>
        <tr><td>重點</td><td>名詞概念與流程理解</td><td>情境判斷與實務應用</td></tr>
        <tr><td>準備方向</td><td>廣度閱讀</td><td>題型熟練與案例分析</td></tr>
        <tr><td>難度</td><td>入門</td><td>中階思維層級</td></tr>
      </table>

      <h2>官方核心資訊平台</h2>
      <ul>
        <li><strong>iPAS 官方網站：</strong><a href="https://www.ipas.org.tw/" target="_blank">https://www.ipas.org.tw/</a></li>
        <li><strong>職能基準下載專區：</strong><a href="https://www.ipas.org.tw/AbilityStandardDownload.aspx" target="_blank">https://www.ipas.org.tw/AbilityStandardDownload.aspx</a></li>
      </ul>

      <h2>實務法規與國際標準</h2>
      <ul>
        <li><strong>NCERT（國家資通安全通報應變）：</strong><a href="https://www.ncert.nat.gov.tw" target="_blank">https://www.ncert.nat.gov.tw</a></li>
        <li><strong>ISO/IEC 27000 系列：</strong>ISMS 資訊安全管理系統概念</li>
        <li><strong>GDPR：</strong>跨國資料保護規範，常出現在法規理解題</li>
      </ul>

      <h2>結語</h2>
      <div class="highlight-box">iPAS AI 應用規劃師考試的核心並非程式撰寫能力，而是能否判斷「什麼問題適合用 AI 解決」。當你建立正確理解框架，不僅能通過考試，更能在職涯中真正運用 AI 思維。</div>
    `
  },
  {
    id: "statistics-basics",
    title: "統計學診斷基礎",
    date: "2026-01",
    labels: ["數據基本功與資料工程", "講義整理"],
    excerpt: "集中趨勢（平均數/中位數/眾數）、離散程度（標準差/IQR）、離群值偵測（Z-score/Boxplot）、常態分佈 68-95-99.7 法則。",
    content: `
      <div class="info-box">研讀提醒：本章節之「假設檢定與推論統計」為中級科目 L221 重點。初級考生僅需理解平均數與中位數如何受異常值影響即可。</div>

      <h2>一、集中趨勢：數據的中心在哪裡？</h2>
      <h3>1. 平均數（Mean）</h3>
      <ul>
        <li>定義：所有數值總和除以次數。</li>
        <li>缺點：極易受離群值（Outliers）影響。</li>
        <li>案例：若一家公司 9 人月薪 3 萬，老闆月薪 100 萬，平均月薪會被拉高到 12 萬，無法代表基層現狀。</li>
      </ul>
      <h3>2. 中位數（Median）</h3>
      <ul>
        <li>定義：數據由小到大排列後，位居正中間的數值。</li>
        <li>優點：具備穩健性（Robustness），不受極端值影響。</li>
        <li>考點：當數據分佈不均（偏態）時，中位數比平均數更能反映真實中心點。</li>
      </ul>
      <h3>3. 眾數（Mode）</h3>
      <p>定義：出現次數最多的數值。常用於處理類別型資料（如：哪個產品最熱銷）。</p>

      <h2>二、離散程度：數據散得很開嗎？</h2>
      <ul>
        <li><strong>全距（Range）：</strong>最大值減最小值。最直觀但最粗略。</li>
        <li>
          <strong>標準差（Standard Deviation）：</strong>
          <ul>
            <li>定義：數據偏離平均值的平均距離。</li>
            <li>意義：標準差大，表示數據波動劇烈（風險高）；標準差小，表示數據穩定（易預測）。</li>
          </ul>
        </li>
        <li>
          <strong>四分位距（IQR）：</strong>
          <ul>
            <li>定義：第 75 百分位數（Q3）與第 25 百分位數（Q1）的差值。</li>
            <li>應用：常配合箱型圖（Boxplot）來偵測離群值。</li>
          </ul>
        </li>
      </ul>

      <h2>三、診斷術：如何抓出離群值（Outliers）？</h2>
      <h3>1. Z-分數（Z-score）法</h3>
      <p>計算某數據點距離平均值有幾個標準差。慣例上，當 |Z| > 3（即超過三個標準差）時，通常視為異常值。</p>
      <h3>2. 箱型圖（Boxplot）法</h3>
      <p>落在 [Q1 - 1.5 × IQR, Q3 + 1.5 × IQR] 範圍外的點，即為離群值。</p>

      <h2>四、數據分佈：常態分佈</h2>
      <div class="highlight-box">
        <p><strong>68-95-99.7 法則：</strong></p>
        <ul>
          <li>約 68% 的數據落在 1 個標準差內。</li>
          <li>約 95% 的數據落在 2 個標準差內。</li>
          <li>約 99.7% 的數據落在 3 個標準差內。</li>
        </ul>
      </div>

      <h2>自我檢測題</h2>
      <div class="qa-block">
        <p class="question">題目 1：某班級成績大多集中在 70-80 分，但有一位學生考了 0 分。哪一個統計指標最能代表全班水平且不受 0 分影響？<br>(A) 平均數 (B) 中位數 (C) 標準差 (D) 全距</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">中位數具備穩健性，不受極端值影響。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 2：在常態分佈下，約有多少比例的數據落在距離平均值正負兩個標準差的範圍內？<br>(A) 50% (B) 68% (C) 95% (D) 99.7%</p>
        <span class="answer-tag">解答：(C)</span>
        <div class="analysis">68-95-99.7 法則：1σ=68%、2σ=95%、3σ=99.7%。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 3：若某筆交易金額的 Z-Score 為 4.5，這代表什麼意思？<br>(A) 非常接近平均值 (B) 高於平均值 4.5 倍 (C) 距離平均值達 4.5 個標準差，極可能是離群值 (D) 屬正常範圍</p>
        <span class="answer-tag">解答：(C)</span>
        <div class="analysis">|Z| > 3 即視為異常，4.5 更是高度異常，極可能是離群值。</div>
      </div>
    `
  },
  {
    id: "etl-process",
    title: "ETL 實務流程",
    date: "2026-01",
    labels: ["數據基本功與資料工程", "講義整理"],
    excerpt: "ETL（Extract, Transform, Load）是將原始數據轉化為 AI 黃金燃料的標準流程。在 AI 專案中，開發演算法只佔 20%，其餘 80% 都在處理數據。",
    content: `
      <h2>ETL 是什麼？</h2>
      <p>在 AI 專案中，開發演算法可能只佔 20% 的時間，其餘 80% 的精力通常都花在<strong>處理數據</strong>。ETL（Extract, Transform, Load）就是將原始數據轉化為「AI 黃金燃料」的標準流程。</p>

      <h2>一、ETL 三大階段拆解</h2>
      <h3>1. Extract（擷取）</h3>
      <ul>
        <li>核心任務：從各種異質來源收集數據。</li>
        <li>來源範例：SQL 資料庫、ERP 系統、網頁爬蟲、IoT 感測器訊息、JSON API。</li>
        <li>考點重點：此階段最常遇到的挑戰是「連線授權」與「資料格式不一」。</li>
      </ul>
      <h3>2. Transform（轉換）【最關鍵且耗時】</h3>
      <p>這是規劃師最需要介入設計的環節。主要包含：</p>
      <ul>
        <li><strong>資料清洗（Cleaning）：</strong>刪除重複值、處理異常值（如：年齡 999 歲）、填補遺缺值。</li>
        <li><strong>格式統一（Standardization）：</strong>將日期統一為 YYYY-MM-DD，或將金額統一幣別。</li>
        <li><strong>特徵工程（Feature Engineering）：</strong>將原始數據轉為模型易讀的格式。例如：將「居住地：台北」轉換為數值標籤 1。</li>
        <li><strong>去識別化（De-identification）：</strong>為了符合隱私法規（如 GDPR），將姓名、身份證字號等敏感資訊遮蔽或加密。</li>
      </ul>
      <h3>3. Load（載入）</h3>
      <ul>
        <li>資料倉儲（Data Warehouse）：用於傳統分析與結構化數據。</li>
        <li>資料湖（Data Lake）：用於儲存海量的原始或非結構化數據。</li>
        <li>向量資料庫（Vector Database）：用於生成式 AI（RAG）的語意搜尋。</li>
      </ul>

      <h2>二、ELT 與 ETL 的差異（進階考點）</h2>
      <table>
        <tr><th>模式</th><th>順序</th><th>適合情境</th></tr>
        <tr><td>ETL（傳統）</td><td>先轉換再載入</td><td>數據量小、安全性要求高</td></tr>
        <tr><td>ELT（現代）</td><td>先載入再轉換</td><td>雲端資料庫（BigQuery, Snowflake）高速運算，靈活性更高</td></tr>
      </table>

      <h2>三、規劃師必懂的品質守門員</h2>
      <ul>
        <li><strong>完整性（Completeness）：</strong>沒有大量空值。</li>
        <li><strong>唯一性（Uniqueness）：</strong>沒有重複採集。</li>
        <li><strong>即時性（Timeliness）：</strong>數據是否反映現狀（如：不使用十年前的偏好預測現在的行為）。</li>
      </ul>

      <h2>自我檢測題</h2>
      <div class="qa-block">
        <p class="question">題目 1：將「台北、台中、高雄」等城市名稱轉換為模型可理解的數值代碼，這屬於 ETL 中的哪一個階段？<br>(A) Extract (B) Transform (C) Load (D) Analysis</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">城市名稱轉數值屬於特徵工程，是 Transform（轉換）階段的工作。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 2：關於 ETL 流程，下列何者「錯誤」？<br>(A) Transform 通常是最耗時的 (B) Extract 只能從單一資料庫讀取 (C) Load 的目的地可以是 Data Lake (D) 數據清洗是 Transform 的重要任務</p>
        <span class="answer-tag">解答：(B)</span>
        <div class="analysis">Extract 可以從多個異質來源（SQL、API、IoT 等）提取數據，並非只能從單一資料庫。</div>
      </div>
      <div class="qa-block">
        <p class="question">題目 3：企業需要處理極大規模的非結構化數據，且希望利用雲端平台的運算力直接在儲存後進行處理，這種模式稱為？<br>(A) ETL (B) API (C) ELT (D) SQL</p>
        <span class="answer-tag">解答：(C)</span>
        <div class="analysis">先 Load（載入）再 Transform（轉換）的模式稱為 ELT，利用雲端高效運算能力直接在資料庫內處理數據。</div>
      </div>
    `
  },
  {
    id: "data-types",
    title: "資料型態辨識",
    date: "2026-01",
    labels: ["數據基本功與資料工程", "講義整理"],
    excerpt: "掌握結構化/非結構化/半結構化資料的差異，以及名目/順序/區間/比率四種量測尺度，是 iPAS 常考基礎觀念。",
    content: `
      <h2>資料結構分類</h2>
      <table>
        <tr><th>類型</th><th>特徵</th><th>例子</th></tr>
        <tr><td>結構化資料</td><td>有固定格式、行列結構，存於資料庫</td><td>Excel 表格、SQL 資料庫、CRM 系統</td></tr>
        <tr><td>非結構化資料</td><td>無固定格式，難以直接分析</td><td>圖片、影片、音訊、自由文字</td></tr>
        <tr><td>半結構化資料</td><td>有一定格式但不完全規則</td><td>JSON、XML、電子郵件、HTML</td></tr>
      </table>

      <h2>量測尺度（四種資料等級）</h2>
      <table>
        <tr><th>尺度</th><th>特性</th><th>例子</th><th>可用操作</th></tr>
        <tr><td>名目尺度（Nominal）</td><td>只能分類，無順序</td><td>血型(A/B/O)、顏色、性別</td><td>計算眾數、One-Hot Encoding</td></tr>
        <tr><td>順序尺度（Ordinal）</td><td>有順序，但間距無意義</td><td>滿意度(1-5)、學歷、名次</td><td>排序、計算中位數</td></tr>
        <tr><td>區間尺度（Interval）</td><td>有順序且間距相等，但無絕對零點</td><td>溫度(°C)、年份</td><td>加減運算、平均數</td></tr>
        <tr><td>比率尺度（Ratio）</td><td>有絕對零點，可做比率比較</td><td>身高、體重、銷售額、年齡</td><td>所有數學運算</td></tr>
      </table>

      <div class="highlight-box">
        <p>⚠️ 常見考試陷阱：</p>
        <ul>
          <li>溫度 0°C 不代表「沒有溫度」→ 區間尺度，非比率尺度</li>
          <li>攝氏溫度不能說「30°C 是 10°C 的 3 倍熱」→ 無比率意義</li>
          <li>學歷（國中 &lt; 高中 &lt; 大學）有順序但間距不固定 → 順序尺度</li>
        </ul>
      </div>

      <h2>編碼選擇建議</h2>
      <table>
        <tr><th>資料類型</th><th>推薦編碼方式</th><th>理由</th></tr>
        <tr><td>名目資料（無順序）</td><td>One-Hot Encoding</td><td>避免引入假的順序關係</td></tr>
        <tr><td>順序資料（有順序）</td><td>標籤編碼（Label Encoding）</td><td>保留順序關係</td></tr>
        <tr><td>連續數值</td><td>Min-Max 或 Z-score 標準化</td><td>消除量級差異</td></tr>
      </table>
    `
  },
  {
    id: "ai-basic-definition",
    title: "AI 基本定義",
    date: "2026-01",
    labels: ["AI 核心定義與治理框架", "講義整理"],
    excerpt: "人工智慧的定義、強 AI vs 弱 AI、機器學習三大類型（監督式/非監督式/強化學習），以及深度學習與神經網路的關係。",
    content: `
      <h2>什麼是人工智慧（AI）？</h2>
      <p>人工智慧是讓電腦系統能夠<strong>模擬人類智能行為</strong>的技術，包含學習、推理、問題解決、感知和語言理解等能力。</p>
      <div class="info-box">《人工智慧基本法》定義：AI 系統必須具備「自主運行能力」，並透過機器學習及演算法實現預測、內容、建議或決策。</div>

      <h2>AI 的三個層次</h2>
      <table>
        <tr><th>層次</th><th>說明</th><th>關係</th></tr>
        <tr><td>人工智慧（AI）</td><td>最廣義的概念，讓機器模仿人類智能</td><td>最大圓</td></tr>
        <tr><td>機器學習（ML）</td><td>AI 的子集，讓機器從數據中自動學習規則</td><td>中間圓</td></tr>
        <tr><td>深度學習（DL）</td><td>ML 的子集，使用多層神經網路進行特徵提取</td><td>最小圓</td></tr>
      </table>

      <h2>機器學習三大類型</h2>
      <h3>1. 監督式學習（Supervised Learning）</h3>
      <ul>
        <li>給機器標有正確答案的訓練資料（輸入 + 標籤）</li>
        <li>常見演算法：線性迴歸、決策樹、SVM、Random Forest</li>
        <li>應用：圖像分類、垃圾郵件偵測、房價預測</li>
      </ul>
      <h3>2. 非監督式學習（Unsupervised Learning）</h3>
      <ul>
        <li>只給輸入資料，讓機器自己找出規律</li>
        <li>常見演算法：K-means、PCA（主成分分析）</li>
        <li>應用：客戶分群、異常偵測、資料降維</li>
      </ul>
      <h3>3. 強化學習（Reinforcement Learning）</h3>
      <ul>
        <li>智體在環境中採取行動，根據獎勵/懲罰調整策略</li>
        <li>應用：遊戲 AI（AlphaGo）、機器人控制、自動駕駛</li>
      </ul>

      <h2>強 AI vs. 弱 AI</h2>
      <table>
        <tr><th>類型</th><th>說明</th><th>現況</th></tr>
        <tr><td>弱 AI（Narrow AI）</td><td>只能執行特定任務，如下圍棋、人臉辨識</td><td>目前所有 AI 都屬此類</td></tr>
        <tr><td>強 AI（AGI）</td><td>能執行任何人類智能任務，具備通用推理能力</td><td>尚未實現，仍是研究目標</td></tr>
      </table>
    `
  },
  {
    id: "ai-governance",
    title: "AI 治理原則",
    date: "2026-01",
    labels: ["AI 核心定義與治理框架", "講義整理"],
    excerpt: "AI 治理框架：台灣《人工智慧基本法》七大原則、歐盟 AI Act 風險分級（不可接受/高風險/有限/最低）、OECD AI 原則。",
    content: `
      <h2>為什麼 AI 需要治理？</h2>
      <p>AI 系統在帶來效率提升的同時，也帶來了公平性、隱私、安全、透明度等挑戰。治理框架旨在確保 AI 的<strong>可信任性（Trustworthy AI）</strong>。</p>

      <h2>台灣《人工智慧基本法》七大原則</h2>
      <div class="info-box">📝 口訣：<strong>永人隱資透公問</strong></div>
      <table>
        <tr><th>原則</th><th>說明</th></tr>
        <tr><td>永續發展與福祉</td><td>兼顧社會公平與環境永續</td></tr>
        <tr><td>人類自主</td><td>確保人為可控，Human-in-the-loop，不取代人類道德判斷</td></tr>
        <tr><td>隱私保護與資料治理</td><td>採資料最小化原則，保護個資</td></tr>
        <tr><td>資安與安全</td><td>建立防護措施，確保系統穩健</td></tr>
        <tr><td>透明與可解釋</td><td>產出需標記，讓使用者理解 AI 運作邏輯</td></tr>
        <tr><td>公平與不歧視</td><td>避免演算法產生偏差或歧視特定群體</td></tr>
        <tr><td>問責機制</td><td>各階段開發與部署者需承擔相應責任</td></tr>
      </table>

      <h2>歐盟 AI Act 風險分級</h2>
      <table>
        <tr><th>風險層級</th><th>說明</th><th>例子</th></tr>
        <tr><td>🚫 不可接受風險</td><td>嚴格禁止</td><td>政府主導的社會評分系統、操縱人類行為的 AI</td></tr>
        <tr><td>⚠️ 高風險</td><td>需嚴格監管</td><td>醫療診斷、求職篩選、貸款審核、教育評分</td></tr>
        <tr><td>🟡 有限風險</td><td>需告知義務</td><td>聊天機器人（需告知用戶與 AI 互動）</td></tr>
        <tr><td>🟢 最低風險</td><td>幾乎無需額外規管</td><td>垃圾郵件過濾器、AI 遊戲</td></tr>
      </table>

      <h2>OECD AI 原則（五大原則）</h2>
      <ul>
        <li>包容性成長、永續發展與福祉</li>
        <li>以人為本的價值觀與公平</li>
        <li>透明度與可解釋性</li>
        <li>穩健性、安全性與防禦性</li>
        <li>問責制</li>
      </ul>

      <div class="highlight-box">📌 考試重點：EU AI Act 與台灣《人工智慧基本法》的高風險 AI 定義及禁止項目容易出現在情境判斷題中。</div>
    `
  },
  {
    id: "risk-law",
    title: "法規與風險",
    date: "2026-01",
    labels: ["AI 核心定義與治理框架", "考試攻略"],
    excerpt: "iPAS 相關法規整理：個人資料保護法、GDPR、歐盟 AI Act、ISO 27001，以及 AI 專案常見風險管理框架。",
    content: `
      <h2>個人資料保護法（個資法）</h2>
      <h3>八大原則：</h3>
      <ul>
        <li>明確目的原則：蒐集個資需有明確、合法目的</li>
        <li>最小化原則：只蒐集達成目的所必要之最少資料</li>
        <li>告知同意原則：需事先告知當事人並取得同意</li>
        <li>安全維護原則：採取適當技術與組織措施保護個資</li>
        <li>資料正確性原則：維護資料準確性，必要時更新</li>
        <li>存取限制原則：限制不相關人員存取</li>
        <li>目的外使用限制：不得超出蒐集目的範圍使用</li>
        <li>刪除權利原則：當事人可要求刪除其個資</li>
      </ul>

      <h2>GDPR（一般資料保護規則）</h2>
      <p>歐盟跨國資料保護規範，適用於處理歐盟公民個資的任何組織，即使公司不在歐盟境內。</p>
      <ul>
        <li>資料最小化</li>
        <li>被遺忘權（Right to be Forgotten）</li>
        <li>資料可攜性（Data Portability）</li>
        <li>資料外洩通報義務（72 小時內）</li>
      </ul>

      <h2>AI 專案常見風險類型</h2>
      <table>
        <tr><th>風險類型</th><th>說明</th><th>應對措施</th></tr>
        <tr><td>資料偏差風險</td><td>訓練資料不具代表性，導致歧視性預測</td><td>多元資料來源、定期偏差審計</td></tr>
        <tr><td>模型退化風險</td><td>現實資料分佈改變，模型準確度下降</td><td>持續監控 PSI（族群穩定性指數）</td></tr>
        <tr><td>隱私洩漏風險</td><td>模型訓練過程記憶了個人敏感資料</td><td>聯邦學習、差分隱私、去識別化</td></tr>
        <tr><td>可解釋性風險</td><td>決策過程不透明，無法向利害關係人說明</td><td>使用 LIME、SHAP 等 XAI 工具</td></tr>
        <tr><td>合規風險</td><td>違反個資法、GDPR、AI Act 等法規</td><td>法規遵循審查、監理沙盒測試</td></tr>
      </table>
    `
  },

  // ===== 考古題解析 =====
  {
    id: "114-exam-subject1",
    title: "114 年第四次 AI 應用規劃師 - 初級能力鑑定（第一科：人工智慧基礎概論）試題解析",
    date: "2026-01",
    labels: ["考古題解析", "考前快速回顧"],
    excerpt: "針對 114 年第四次 iPAS AI 初級能力鑑定第一科，將 50 題核心知識點整理為四大範疇：AI 倫理法規、機器學習基礎、資料處理特徵工程、深度學習與生成式 AI。",
    content: `
      <p>這份文件為 114 年第四次 AI 應用規劃師 - 初級能力鑑定（第一科：人工智慧基礎概論）的公告試題解析。為了幫助您理解，將這 50 題的核心知識點整理為四大範疇進行解析。</p>
      <p>資料來源：<a href="https://www.ipas.org.tw/certification/AIAP/learning-resources" target="_blank">https://www.ipas.org.tw/certification/AIAP/learning-resources</a></p>

      <h2>一、AI 倫理、法規與治理（第 1, 9, 10, 23, 30, 31, 49 題）</h2>
      <p>這部分著重於政府政策、國際標準以及 AI 決策中的人類角色。</p>
      <ul>
        <li><strong>人機協作模式（Human-in/on/out-of-the-loop）：</strong>第 1 題強調「人在迴圈上（Human-over-the-loop）」是指人類進行日常監督，必要時才介入。</li>
        <li>
          <strong>法規制度（第 9, 10 題）：</strong>
          <ul>
            <li>我國《人工智慧基本法》草案參考歐盟的「監理沙盒（Regulatory Sandbox）」制度（第 9 題）。</li>
            <li>金融機構 AI 治理包含人才培育、了解生成式 AI 運作及高階主管監督，但<strong>不包含「每日公布運作狀況」</strong>（第 10 題）。</li>
          </ul>
        </li>
        <li>
          <strong>安全評測與 XAI（第 23, 29, 31, 49 題）：</strong>
          <ul>
            <li>LIME 用於解釋「單一樣本」的決策（第 29 題）；反事實解釋則需滿足因果約束與操作性（第 31 題）。</li>
            <li>數位部評測項目包含當責、可靠、隱私資安（第 23 題）。安全性指標包含事實正確性、偏見、惡意使用，但<strong>不包含「資料複雜性」</strong>（第 49 題）。</li>
          </ul>
        </li>
      </ul>

      <h2>二、機器學習基礎與模型類型（第 7, 11, 13, 15, 17, 18, 20, 21, 40, 44 題）</h2>
      <p>區分監督式、非監督式與強化學習是初級考試的核心。</p>
      <table>
        <tr><th>學習類型</th><th>核心特徵</th><th>考題應用舉例</th></tr>
        <tr><td>監督式</td><td>有標籤（Label），處理分類與迴歸</td><td>預測房價（第 19 題）、糖尿病風險（第 20 題）</td></tr>
        <tr><td>非監督式</td><td>無標籤，處理分群（Clustering）與降維</td><td>用戶分群（第 11 題）、股票走勢分組（第 13 題）</td></tr>
        <tr><td>強化學習</td><td>透過獎勵/懲罰與環境互動</td><td>自駕車訓練（第 13 題）、智慧投資系統（第 17 題）</td></tr>
      </table>
      <ul>
        <li><strong>重要演算法：</strong>
          <ul>
            <li>KNN（K-近鄰）：採多數決，如 K=3 時，A類占2個則預測為 A（第 15 題）。</li>
            <li>貝氏分類器：屬於生成模型，建構資料整體分布並利用條件機率（第 7 題）。</li>
            <li>隨機森林：適合處理大量特徵並提升穩定性（第 21 題）。</li>
            <li>Deep Q-Learning：用神經網路解決高維空間中 Q 表難以擴展的問題（第 18 題）。</li>
          </ul>
        </li>
      </ul>

      <h2>三、資料處理與特徵工程（第 2, 3, 4, 6, 12, 34, 41, 43, 45, 46, 48 題）</h2>
      <p>資料品質直接決定模型成敗，「垃圾進，垃圾出（Garbage In, Garbage Out）」是此處重點。</p>
      <ul>
        <li>
          <strong>特徵工程技巧：</strong>
          <ul>
            <li>One-hot 編碼：適合處理「交通方式」等類別欄位（第 41 題）。</li>
            <li>特徵交叉（Feature Cross）：結合「星期」與「時間」來預測通勤（第 2 題）。</li>
            <li>數值標準化：當特徵範圍差異極大（如年齡與薪水）時使用（第 43 題）。</li>
          </ul>
        </li>
        <li>
          <strong>正則化（Regularization）：</strong>
          <ul>
            <li>L1（Lasso）：會使不重要的權重趨近於零，產生稀疏性（第 4, 6 題）。</li>
            <li>L2（Ridge）：控制權重的大小，避免過擬合。</li>
          </ul>
        </li>
        <li>
          <strong>統計圖表：</strong>
          <ul>
            <li>散佈圖：觀察兩數值變數（如身高體重）相關性（第 12 題）。</li>
            <li>直方圖：觀察單一變數（如年齡）的分布情形（第 48 題）。</li>
          </ul>
        </li>
      </ul>

      <h2>四、深度學習與生成式 AI（第 8, 16, 22, 24, 26, 27, 28, 38, 50 題）</h2>
      <p>這部分涵蓋了當前最熱門的 LLM 與 Transformer 技術。</p>
      <ul>
        <li>
          <strong>模型架構：</strong>
          <ul>
            <li>RNN：處理序列數據，但長序列易有梯度消失問題（第 16 題）。</li>
            <li>VAE（變分自編碼器）：編碼器轉為潛在空間，解碼器重建資料（第 22 題）。</li>
            <li>Transformer：推理瓶頸在於自注意力層的<strong>平方級記憶體成長</strong>（第 28 題）。</li>
          </ul>
        </li>
        <li>
          <strong>模型優化與挑戰：</strong>
          <ul>
            <li>剪枝（Pruning）：移除冗餘權重以縮小模型（第 27 題）。</li>
            <li>災難性遺忘：微調時遺忘預訓練的廣泛知識（第 26 題）。</li>
            <li>RAG（檢索增強生成）：採用「增量更新」可解決索引重建與資料過時問題（第 38 題）。</li>
          </ul>
        </li>
      </ul>

      <div class="highlight-box">
        <p>💡 <strong>備考建議：</strong></p>
        <ol>
          <li>區分名詞：搞懂 L1/L2、MAE/MSE、偏差（Bias）/變異（Variance）的差異。</li>
          <li>情境應用：考試常給予一段「公司情境」，詢問該選哪種模型或特徵處理法，平時多思考「為什麼這個情境不能用那種方法」。</li>
          <li>法規更新：《人工智慧基本法》與數位部評測標準是必考點。</li>
        </ol>
      </div>
    `
  },
  {
    id: "114-exam-subject2",
    title: "114 年第四次 AI 應用規劃師 - 初級能力鑑定（第二科：生成式 AI 應用與規劃）試題解析",
    date: "2026-01",
    labels: ["考古題解析", "考前快速回顧"],
    excerpt: "針對 114 年第四次 iPAS AI 初級能力鑑定第二科，將 50 題分為四大領域：提示工程與模型優化、LLM 運作機制、企業應用規劃、生成式 AI 倫理治理。",
    content: `
      <p>這份文件為 114 年第四次 AI 應用規劃師 - 初級能力鑑定（第二科：生成式 AI 應用與規劃）的公告試題解析。相較於第一科的基礎概論，這一科更著重於大型語言模型（LLM）的實務操作、提示工程（Prompt Engineering）以及生成式 AI 的企業應用場景。</p>
      <p>以下將 50 題核心考點區分為四大關鍵領域進行深度解析：</p>

      <h2>一、提示工程與模型優化技術（第 2, 4, 10, 15, 20, 26, 30, 41 題）</h2>
      <p>這部分是考試中佔比最高的部分，側重如何透過技術手段提升 AI 輸出的品質。</p>
      <ul>
        <li>
          <strong>提示工程（Prompt Engineering）技術：</strong>
          <ul>
            <li>少樣本提示（Few-shot Prompting）：提供少量範例（輸入與輸出對）引導模型學習新任務。</li>
            <li>思維鏈（Chain of Thought, CoT）：要求模型展示推理過程，能有效提升處理邏輯難題的能力。</li>
            <li>角色扮演（Role-playing）：為模型設定特定身份（如律師或工程師）以調整專業語氣。</li>
          </ul>
        </li>
        <li>
          <strong>模型參數調整：</strong>
          <ul>
            <li>Temperature（溫度）：數值越高（如 0.8 以上）輸出越具創意，數值越低（如 0.2）輸出越穩定一致。</li>
            <li>Top-P（核取樣）：限制模型只從機率累積達到 P 值的詞彙中選擇，平衡多樣性與邏輯性。</li>
          </ul>
        </li>
        <li>
          <strong>知識更新與外部擴充：</strong>
          <ul>
            <li>RAG（檢索增強生成）：解決 LLM「幻覺（Hallucination）」與「訓練數據過時」的最佳方案，透過外部知識庫提供精確事實。</li>
            <li>微調（Fine-tuning）：針對特定垂直領域數據對模型進行參數訓練，改變模型的行為模式。</li>
          </ul>
        </li>
      </ul>

      <h2>二、大型語言模型（LLM）的運作機制（第 7, 8, 12, 17, 21, 28 題）</h2>
      <p>理解模型底層結構對於規劃 AI 應用至關重要。</p>
      <ul>
        <li>
          <strong>Transformer 模型架構：</strong>
          <ul>
            <li>自注意力機制（Self-Attention）：允許模型在處理文字時，同時考慮上下文不同權重，解決長文本依賴問題。</li>
            <li>Token（權杖/詞元）：模型處理文字的基本單位，通常一個單字會拆解成多個 Token。</li>
          </ul>
        </li>
        <li>
          <strong>模型類型與生命週期：</strong>
          <ul>
            <li>災難性遺忘（Catastrophic Forgetting）：模型在微調新知識時，會逐漸忘記先前預訓練獲得的廣泛能力。</li>
            <li>推理與批次推論：如何在高流量環境下分配 GPU 資源以降低延遲。</li>
          </ul>
        </li>
      </ul>

      <h2>三、企業應用規劃與實務流程（第 13, 14, 21, 31, 33, 34, 42, 44 題）</h2>
      <p>考題模擬了企業導入 AI 時可能遇到的實際問題。</p>
      <ul>
        <li><strong>專案導入流程：</strong>通常包含「需求分析 → 原型開發（PoC）→ 測試驗證 → 正式部署」。</li>
        <li>
          <strong>跨領域應用情境：</strong>
          <ul>
            <li>醫療領域：建立聯邦學習（Federated Learning）以在不洩漏病患隱私的情況下共享模型權重。</li>
            <li>金融領域：運用 AI 進行反洗錢（AML）偵測或個人化理財建議。</li>
            <li>零售領域：結合向量數據庫（Vector Database）實現高效的產品語意搜尋。</li>
          </ul>
        </li>
        <li><strong>系統效能與成本評估：</strong>涉及 API 呼叫成本（Token 計費）、回傳延遲（Latency）以及資料隱私規範。</li>
      </ul>

      <h2>四、生成式 AI 倫理、治理與法規（第 1, 9, 10, 23, 25, 49 題）</h2>
      <p>此領域緊跟最新政策，考生需熟悉國內外相關規範。</p>
      <ul>
        <li>
          <strong>法規知識：</strong>
          <ul>
            <li>《人工智慧基本法》草案（2025 年 9 月）：確立了人工智慧的創新、風險分級與倫理原則。</li>
            <li>監理沙盒（Regulatory Sandbox）：提供一個受控的環境，允許企業在正式監管前進行創新實驗。</li>
          </ul>
        </li>
        <li>
          <strong>安全評測項目：</strong>
          <ul>
            <li>事實正確性：檢驗模型是否胡言亂語（幻覺）。</li>
            <li>去偏見（Data Debiasing）：在訓練階段調整數據比例，避免模型產生性別、種族歧視。</li>
            <li>當責性、透明度與安全性：數位部對於生成式 AI 的重點評核標準。</li>
          </ul>
        </li>
      </ul>

      <div class="highlight-box">
        <p>💡 <strong>實戰答題技巧：</strong></p>
        <ol>
          <li>關鍵字對應：看到「幻覺/數據過時」應優先聯想 RAG；看到「訓練速度/收斂」應聯想 ReLU/標準化。</li>
          <li>邏輯推理：對於沒看過的場景題，優先選擇符合「隱私保護」、「風險控管」與「人機協作」原則的選項。</li>
          <li>注意 114 年新法：針對 2025 年公布的法案內容需特別留意細微的行政單位或名詞定義。</li>
        </ol>
      </div>
    `
  },
];

// Labels and archive index
const ALL_LABELS = [...new Set(POSTS.flatMap(p => p.labels))].sort();

const ARCHIVE = POSTS.reduce((acc, post) => {
  const key = post.date.substring(0, 7); // "2026-01"
  acc[key] = (acc[key] || 0) + 1;
  return acc;
}, {});
