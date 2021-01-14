import common
import constants
import json
import os
import requests

BASE_URL = constants.BASE_URL
OUTPUT_DIR = constants.OUTPUT_DIR
ENTRIES_FILE_NAME = constants.ENTRIES_FILE_NAME
POSITION_FILE_NAME = constants.POSITION_FILE_NAME
NODE_FILE_NAME = constants.NODE_VISJS
EDGE_FILE_NAME = constants.EDGE_VISJS

def make_node(entry):
    return { 
        "id": entry['id'],
        "label": entry['title']
    }

def make_edge(source, target):
    return { 
        "from": source,
        "to": target,
        "arrows": "to"
    }

def make_edges(source, entries):
    linked_nodes = []
    for e in entries:
        if (source['entry_url'] in e['links']):
            edge = make_edge(source['id'], e['id'])
            linked_nodes.append(edge)
    return linked_nodes

def add_value_to_node():
    nodes = common.read_json(OUTPUT_DIR, NODE_FILE_NAME)
    edges = common.read_json(OUTPUT_DIR, EDGE_FILE_NAME)
    for node in nodes:
        count = len(list(filter(lambda x:x['from'] == node['id'], edges)))
        count += len(list(filter(lambda x:x['to'] == node['id'], edges)))
        node['value'] = count
    common.write_json(nodes, OUTPUT_DIR, NODE_FILE_NAME)

def add_position_to_node():
    nodes = common.read_json(OUTPUT_DIR, NODE_FILE_NAME)
    positions = common.read_json(OUTPUT_DIR, POSITION_FILE_NAME)
    for node in nodes:
        position = positions[str(node['id'])]
        node['x'] = position['x']
        node['y'] = position['y']
    common.write_json(nodes, OUTPUT_DIR, NODE_FILE_NAME)

def make_topology():
    entries = common.read_json(OUTPUT_DIR, ENTRIES_FILE_NAME)

    nodes = []
    edges = []

    for entry in entries:
        nodes.append(make_node(entry))
        edges += make_edges(entry, entries)

    common.write_json(nodes, OUTPUT_DIR, NODE_FILE_NAME)
    common.write_json(edges, OUTPUT_DIR, EDGE_FILE_NAME)

# add_position_to_node()

# add_value_to_node()

make_topology()