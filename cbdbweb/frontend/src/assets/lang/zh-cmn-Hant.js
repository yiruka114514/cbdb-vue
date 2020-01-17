/*
    命名规则：第一级索引的名字跟组件导出的名字保持一致
    如 navbarTop
*/
module.exports = {
    navbarTop:{
        title:"CBDB Web 查詢系統",
        help:"幫助",
        report:"報告",
        lang:"語言",
        user:{
            profile:"個人資料",
            logOut:"登出"
        }
    },
    navbarLeft:{
        home:"首頁",
        entityQuery:"實體查詢",
        entityQueryByPerson:"按人查詢",
        entityQueryByOffice:"通過官職查詢",
        entityQueryByEntry:"通過入仕途經查詢",
        entityQueryByPlace:"通過地點查詢",
        relationQuery:"關係查詢",
        relationQueryByKinship:"通過親屬關係查詢",
        relationQueryByAssociation:"通過社會關係查詢",
        relationQueryBySocialNetwork:"查詢關係網絡",
        relationQueryTwoPerson:"查詢兩人關係",
        visualization:"可視化分析",
        statistics:"統計分析"
    },
    selectPerson:{
        selectButton:"選取人物"
    },
    selectEntry:{
        selectButton:"選取入仕途徑"
    },
    selectOffice:{
        selectButton:"選取官職"
    },
    selectPlace:{
        selectButton:"選取地點"
    },
    selectRelationship:{
        selectButton:"選取關係"
    },
    selectTime:{
        selectButton:"選取時間"
    },
    globalTerm:{
        //全局術語
        queryInput:"查詢式輸入",
        queryConditionOptions:"條件選取",
        userInput:"用戶輸入",
        resultShow:"結果展現",
        startTime:"開始時間",
        endTime:"結束時間",
        isIndexYear:"啟用指數年",
        importPeople:"從本地加載人物列表",
        importLocations:"從本地加載地点列表",
        indexYear:"指數年",
        gen:"性別",
        personId:"人物代碼",
        notes:"注",
        fromYear:"始年",
        toYear:"終年",
        range:"範圍",
        nh:"年號",
        year:"年",
        month:"月",
        day:"日",
        intercalary:"閏",
        source:"出處",
        pages:"頁碼/條目",
        place:"地點",
        details:"詳情",
        before:"之前",
        after:"之後",
        during:"之間",
        true:"是",
        false:"否",
        male:"男",
        female:"女",   
        ganzhi:"日（干支）",
        deathAge:"享年",
        deathAgeRange:"享年範圍",
        status:"社會地位",
        sequence:"次序",     
    },
    entityQueryByOffice:{
        officeNameEn:"官職名-英文",
        officeNameCh:"官職名-中文",
        officeTypeEn:"官職類型-英文",
        officeTypeCh:"官職類型-中文",
        officePlaceEn:"官職地點-英文",
        officePlaceCh:"官職地點-中文",
        personPlaceEn:"人物地點-英文",
        personPlaceCh:"人物地點-中文",
        checkAndSearch:"檢索式確認",
        checkRemind:"茲生成查詢式如下，請於檢索前核查確認"
    },
    entityQueryByPerson:{
        personId:"人物代碼",
        personNameCh:"人名-中文",
        personNameEn:"人名-英文",
        personIndexYear:"指數年",
        checkAndSearch:"檢索條件確認",
        checkRemind:"請於檢索前確認要查詢的人物信息",
        result:{
            basicInfo:"人物基本信息",
            biSurnameEn:"(Pinyin)",
            biSurnameCh:"姓(中文)",
            biNameEn:"(Pinyin)",
            biNameCh:"名(中文)",
            biNote:"注",
            birthDeath:"生卒年月",
            dynasty:"朝代",
            choronym:"郡望",
            householdStatus:"戶籍狀態",
            ethnicity:"種族",
            birthYear:"生年",
            deathYear:"卒年",
            address:"地址",
            placeName:"地名",
            placeType:"地址類別",
            placeSeq:"遷徙次序",
            placeIsMaternal:"娘家地址",
            altName:"別名",
            altNameCh:"別名漢字",
            altNameEn:"別名拼音",
            altNameType:"別名類型",
            entry:"入仕信息",
            entryPlace:"入仕地點",
            entryRank:"科的名次",
            entrySequence:"入仕順序",
            entryParentalStatus:"雙親地位",
            entryYear:"入仕年份",
            entryAge:"入仕年齡",
            postings:"官職",
            kinshipType:"親屬關係類別",
            kinName:"親戚姓名",
            entryAssociation:"社會關係類別",
            entryAssociate:"社會關係人",    
            firstPostingNote:"釋褐官註",
            kinship:"親屬關係",
            writingRole:"角色",
            writings:"著述"
                   
        }
    },
    entityQueryByEntry:{
        entryNameEn:"入仕途徑-英文",
        entryNameCh:"入仕途徑-中文",
        personNameEn:"人名-英文",
        personNameCh:"人名-中文",
        checkAndSearch:"檢索式確認",
        checkRemind:"茲生成查詢式如下，請於檢索前核查確認"
    },
    entityQueryByPlace:{
        personNameEn:"人名-英文",
        personNameCh:"人名-中文",
        placeNameEn:"地名-英文",
        placeNameCh:"地名-中文",
        checkAndSearch:"檢索式確認",
        checkRemind:"茲生成查詢式如下，請於檢索前核查確認"
    }
}