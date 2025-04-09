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
    // position: { x: 50, y: 0 },
    // state: 'idle',
    lastEventTime: 0,
    const_stats: {
        MAX_HP: 100,        
        MAX_MANA: 50,       
        MAX_STAMINA: 80,        
    },
    stats: {
        hp: 100,
        mana: 50,
        stamina: 80
    },
};

export default player