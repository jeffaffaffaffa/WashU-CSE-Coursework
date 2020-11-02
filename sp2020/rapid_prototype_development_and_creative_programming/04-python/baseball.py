import re

import sys, os

bats_dict = {}
hits_dict = {}
avgs_dict = {}

name = ''
bats = 0
hits = 0

#command line arguments:
#sys.argv is a list, at 0 program name, at 1 filename is stored
#for this program, needs baseball.py filename.txt. Length requirement could change depending on program etc.
if len(sys.argv) < 2:
    sys.exit(f"Usage: {sys.argv[0]} filename")

file = sys.argv[1]

if not os.path.exists(file):
    sys.exit(f"Error: File '{sys.argv[1]}' not found")

#open and read file
infile = open(file, "r")

#regex
pat1 = r"(?P<name>\s{0}[A-Z']+\w{0,}\s[A-Z']+\w{0,})\s\w*\s(?P<bats>\d{1,2})\s\w*\s\w*\s(?P<hits>\d{1,2})\s\w*\s\w*\s(?P<runs>\d{1})"

# names_pat = "(?P<name>\s{0}[A-Z]+\w{0,}\s[A-Z]+\w{0,})\s[b]"
# bats_pat = "[b][a][t][t][e][d]\s(?P<bats>\d{1,2})"
# hits_pat = "(?P<hits>\d{1,2})\s[h][i][t][s]"

for line in infile:
    try:
        # r = re.compile(pat1)
        r = re.match(pat1, line)
        name = r.group('name')
        bats = int(r.group('bats'))
        hits = int(r.group('hits'))
    except: 
        r = None
        name = None #false could also work

    if name: #if the name exists (because before we start matching names, some lines have no matches)
        if name not in bats_dict: #if name is not in dictionary, add to dictionaries
            bats_dict.update({name: 0})
            hits_dict.update({name: 0})
            avgs_dict.update({name: 0})
            
        # print(name)
        # print(bats)
        # print(hits)
        updated_bats = bats_dict.get(name) + bats #updated bats for player
        updated_hits = hits_dict.get(name) + hits #updated hits for player
        bats_dict.update({name: updated_bats})
        hits_dict.update({name: updated_hits})

for name in bats_dict and hits_dict: #add name-avg key-value pairs to avgs_dict
    avg = hits_dict.get(name)/bats_dict.get(name) #total hits divided by total bats, rounded to 3 decimal points
    avg = '{:.3f}'.format(round(avg, 3))
    avgs_dict.update({name: avg})

for key, value in sorted(avgs_dict.items(), key=lambda item: item[1], reverse=True): #print out avg_dict in descending order
    print("%s: %s" % (key, value))

#close file after finished
infile.close()