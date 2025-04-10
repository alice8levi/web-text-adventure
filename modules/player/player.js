 const player = {
    title: "Alice",
    exp: {
        lvl: 0,
        total: 0,
        calcLVL: function() {
            this.lvl = Math.floor(this.total/100)
        }
    },
    inventory: Array(10).fill(null), // 10 слотов инвентаря
    lastEventTime: 0,
    const_stats: {
        MAX_HP: 100,        
        MAX_MENTAL: 100,       
        MAX_ENERGY: 100, 
        MIN_HP: 0,
        MIN_MENTAL: 0,  
        MIN_ENERGY: 0,      
    },
    stats: {
        hp: 100,
        mental: 100,
        energy: 100,
    },
};

export default player