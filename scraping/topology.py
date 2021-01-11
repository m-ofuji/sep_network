import common
import constants
import json
import os
import requests

BASE_URL = constants.BASE_URL
OUTPUT_DIR = constants.OUTPUT_DIR
ENTRIES_FILE_NAME = constants.ENTRIES_FILE_NAME
NODE_FILE_NAME = constants.NODE_FILE_NAME
EDGE_FILE_NAME = constants.EDGE_FILE_NAME

def make_node(entry):
    return { 
        "id": entry['id'],
        "label": entry['title']
    }

def make_edge(source, target):
    return { 
        "source": source,
        "target": target
    }

def make_edges(source, entries):
    linked_nodes = []
    for e in entries:
        if (source['entry_url'] in e['links']):
            edge = make_edge(source['id'], e['id'])
            linked_nodes.append(edge)
    return linked_nodes

def make_topology():
    entries = common.read_json(OUTPUT_DIR, ENTRIES_FILE_NAME)

    nodes = []
    edges = []

    for entry in entries:
        nodes.append(make_node(entry))
        edges += make_edges(entry, entries)

    common.write_json(nodes, OUTPUT_DIR, NODE_FILE_NAME)
    common.write_json(edges, OUTPUT_DIR, EDGE_FILE_NAME)

def delete_duplication():
    entries = common.read_json(OUTPUT_DIR, ENTRIES_FILE_NAME)
    fixed_entries = []
    titles = []
    index = 1
    for entry in entries:
        title = entry['title']
        if title in titles: continue
        fixed = entry
        fixed['id'] = index
        fixed_entries.append(fixed)
        titles.append(title)
        index += 1

    common.write_json(fixed_entries, OUTPUT_DIR, 'entries_fixed.json')

make_topology()