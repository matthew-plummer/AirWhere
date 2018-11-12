function toggleState(item) {
            if (item.className == "on") {
                item.className = "off";
                if (item.id == "United") {
                    map.removeLayer("United1")
                } else if (item.id == "Southwest") {
                    map.removeLayer("Southwest1")
                } else if (item.id == "Delta") {
                    map.removeLayer("Delta1")
                } else if (item.id == "American") {
                    map.removeLayer("American1")
                }
            } else {
                item.className = "on";
                if (item.id == "United") {
                    if (Number(feature.properties["Stolen Value"]) < 100) {
                        return true
                    }
                } else if (item.id == "Southwest") {
                    if (Number(feature.properties["Stolen Value"]) >= 100 && Number(feature.properties["Stolen Value"]) < 200) {
                        return true
                    }
                } else if (item.id == "Delta") {
                    if (Number(feature.properties["Stolen Value"]) >= 200 && Number(feature.properties["Stolen Value"]) < 400) {
                        return true
                    }
                } else if (item.id == "American") {
                    if (Number(feature.properties["Stolen Value"]) >= 400) {
                        return true
                    }
                }
            }
        }